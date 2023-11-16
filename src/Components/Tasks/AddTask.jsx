import taskContext from "@/lib/taskContext";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const AddTask = () => {
  const {  handleAddTask, modalGroup } =
    useContext(taskContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [openModal, setOpenModal] = useState(true)

  const handleAddTaskClick = () => {
    handleAddTask({ title, content, group: modalGroup });
    setTitle("");
    setContent("");
    setOpenModal(false);
   
  };

  return (
    <>
      <Dialog open={openModal} >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">Add Task</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div>
              <Input
                type="text"
                className="w-full "
                placeholder="Enter Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="text"
                className="w-full "

                placeholder="Enter Task Description"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="hover:bg-[black] hover:text-[white] transition duration-100 ease-in" onClick={handleAddTaskClick}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddTask;
