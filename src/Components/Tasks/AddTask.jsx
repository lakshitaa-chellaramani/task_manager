import taskContext from "@/lib/taskContext";
import { motion } from "framer-motion";
import React, { useContext, useState } from "react";

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
  const { setModalOpen, handleAddTask, modalGroup, setModalGroup } = useContext(taskContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(modalGroup);

  const handleAddTaskClick = () => {
    handleAddTask({ title, content, group: modalGroup });
    setTitle("");
    setContent("");
};

  return (
    <>
      <motion.div
        className="fixed z-10 top-0 left-0 h-full w-full bg-black bg-opacity-40 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setModalOpen(false)}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="w-full sm:w-3/4 md:w-5/6 lg:w-11/12 max-w-2xl h-[50% sm:h-300px] mx-auto px-8 py-4 rounded-lg flex justify-center items-center bg-red-500"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleAddTaskClick}>Add Task</button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AddTask;