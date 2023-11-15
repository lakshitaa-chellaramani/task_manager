import { MoreHorizontal, Plus } from "lucide-react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import { useContext } from "react";
import taskContext from "@/lib/taskContext";
import { AnimatePresence } from "framer-motion";
import AddTask from "./AddTask";
import createTask from "@/lib/tasks/createTask";
import { useAuth } from "@/lib/auth";
import { firestore } from "@/lib/firebase";

const CardContainer = ({ title, tasks }) => {
  const { modalOpen, setModalOpen, setModalGroup } = useContext(taskContext);
  const {user} = useAuth();
  const {mutate,error} = createTask();
  console.log(firestore.Timestamp?.now());
  const handleClick = () => {
    
    mutate({userId:user?.uid,status:title,title:"New Task",content:"New Description",tag:"Development",date:new Date().toISOString()});
  };
  return (
    <>
      <Droppable droppableId={title}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-[#eef2f5] p-4 scrollbar-hide overflow-y-auto w-full  lg:w-96 h-[77vh] rounded-xl"
          >
            <div className="grid  grid-cols-2">
              <div className="flex  justify-start">
                <h1 className="text-md font-bold text-gray-800">{title}</h1>
              </div>
              <div className="flex gap-4  justify-end">
                <Plus
                  onClick={handleClick}
                  className="h-6 w-6"
                />
                <MoreHorizontal className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-12 grid gap-5">

            {tasks?.map((task, index) => (
              
              <Task {...task} category={title} key={task.taskId} index={index} />
              ))}
              </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <AnimatePresence exitBeforeEnter={false}>
        {modalOpen && <AddTask/>}
      </AnimatePresence>
    </>
  );
};

export default CardContainer;
