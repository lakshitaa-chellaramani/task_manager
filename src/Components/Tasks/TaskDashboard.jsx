import { DragDropContext} from "react-beautiful-dnd";
import { useContext} from "react";
import Dropdown from "./Dropdown";
import taskContext from "@/lib/taskContext";
import CardContainer from "./CardContainer";

const TaskDashboard = () => {
  const {tasks, handleDragAndDrop}=useContext(taskContext);
  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Dropdown/>
        <div className="px-6 flex mt-4 items-center justify-center flex-col md:flex-row gap-5">
          {tasks.map((task, index) => (
            <CardContainer
              key={task.group}
              title={task.group}
              tasks={task.items}
              index={index}
            />
          ))}
        </div>
      </DragDropContext>
    </>
  );
};

export default TaskDashboard;
