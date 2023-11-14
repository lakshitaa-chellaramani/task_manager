import { MoreHorizontal, Plus } from "lucide-react";
import { Droppable } from "react-beautiful-dnd";
import Task from "./Task";

const CardContainer = ({ title, tasks }) => {
    return (
      <>
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
                  <Plus className="h-6 w-6" />
                  <MoreHorizontal className="h-6 w-6" />
                </div>
              </div>
              {tasks.map((task, index) => (
                <Task {...task} key={task.taskId} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </>
    );
  };

export default CardContainer
