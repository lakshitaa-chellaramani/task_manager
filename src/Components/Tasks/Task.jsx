import taskContext from "@/lib/taskContext";
import { useContext } from "react";
import { Draggable } from "react-beautiful-dnd";
import TimeAgo from "./TimeAgo";
import deleteTask from "@/lib/tasks/deleteTask";

const Task = ({ taskId, title,category, status, content,tag, date, index }) => {
  const {mutate , error} = deleteTask();

  const handleDelete = () => {
    mutate({taskId:taskId});
    console.log(error);
  }
  return (
      <>
        {(category===status) && (
                 <Draggable draggableId={taskId} index={index}>
                 {(provided) => (
                   <div
                     {...provided.dragHandleProps}
                     {...provided.draggableProps}
                     ref={provided.innerRef}
                     className="bg-white w-full  h-auto  rounded-2xl"
                   >
                   
                     <div className="grid grid-cols-2">
                       <div className="flex  pt-2 justify-start">
                         <img src="pink.png" className="w-4 h-4" alt="" />
                         <h1 className=" text-[10px] text-gray-400 uppercase font-medium">
                           {tag}
                         </h1>
                       </div>
                      
                     </div>
                     <h1 className="px-4 pt-1 text-lg font-bold ">{title}</h1>
                     <p className="px-4 pt-2 text-xs text-gray-600">{content}</p>
                     <div className=" pt-4 px-4 ">
                       <div className="grid grid-cols-2">
                         <div className="flex  -space-x-4 justify-start">
                           <img
                             className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                             src="https://images.unsplash.com/photo-1699343481899-b20bd561c64e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                             alt=""
                           />
                           <img
                             className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                             src="https://images.unsplash.com/photo-1698778573868-75a5c62ab43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                             alt=""
                           />
                         </div>
                         <div className="flex justify-end">
                           <button className="text-xs  bg-[#22C8AA] rounded-lg px-4 text-gray-50"><TimeAgo timestamp={date} /></button>
                         </div>
                           <button onClick={()=>handleDelete(taskId)}>DELETE</button>
                       </div>
                     </div>
                   </div>
                 )}
               </Draggable>
                )  }
       
      </>
    );
  };

export default Task
