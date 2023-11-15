import { DragDropContext} from "react-beautiful-dnd";
import { useContext, useEffect, useState} from "react";
import Dropdown from "./Dropdown";
import taskContext from "@/lib/taskContext";
import CardContainer from "./CardContainer";
import getTasks, { getCollection } from "@/lib/tasks/getTasks";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "@/lib/firebase";
import { useAuth } from "@/lib/auth";
import updateTask from "@/lib/tasks/updateTask";
import { useQueryClient } from "@tanstack/react-query";

const TaskDashboard = () => {
  const {tasks}=useContext(taskContext);
  const {user} = useAuth();
  const {data,isPending } = getTasks({userId:user?.uid});
  console.log(data);
  const {  error, mutate } = updateTask();
  const handleDragAndDrop = (results) => {
    console.log(results);
    if(results.source.droppableId !== results.destination.droppableId) {

      mutate({
        taskId: results.draggableId,
        status: results.destination.droppableId,
      });
      console.log(error);
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Dropdown/>
        <div className="px-24 grid grid-cols-3 mt-4 items-center justify-center">
          {tasks.map((task, index) => (
            <CardContainer
              key={task.group}
              title={task.group}
              tasks={data}
              index={index}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskDashboard;
