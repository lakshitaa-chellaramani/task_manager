import { MoreHorizontal, Plus } from "lucide-react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useContext, useState } from "react";
import taskContext from "@/lib/taskContext";
import { AnimatePresence } from "framer-motion";
import AddTask from "./AddTask";

const CardContainer = ({ title, tasks }) => {
  const {  setModalGroup } = useContext(taskContext);
  const [modalOpen, setModalOpen] = useState(false)
  const handleClick = () => {
    setModalOpen(!modalOpen);
    setModalGroup(title);
  };
  return (
    <>
        {modalOpen && <AddTask/>}
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-[#eef2f5] scrollbar-hide overflow-y-auto w-full  lg:w-96 h-[77vh] rounded-xl"
          >
            <div className="grid mx-6 grid-cols-2">
              <div className="flex py-4 justify-start">
                <h1 className="text-md font-bold text-gray-800">{title}</h1>
              </div>
              <div className="flex gap-4 py-4 justify-end">
                <Plus
                  onClick={()=>handleClick()}
                  className="h-6 w-6 cursor-pointer"
                />
                <MoreHorizontal className="h-6 w-6" />
              </div>
            </div>
           <div className="flex flex-col gap-5">
           {tasks.map((task, index) => (
              <Task {...task} key={task.taskId} index={index} />
            ))}
           </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      
    </>
  );
};

export default CardContainer;
