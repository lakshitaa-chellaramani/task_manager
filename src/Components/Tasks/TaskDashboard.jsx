import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useState } from "react";
import { MoreHorizontal, Plus } from "lucide-react";
import Dropdown from "./Dropdown";

const DATA = [
  {
    userId: "Ayush",
    group: "ToDo",
    items: [
      {
        taskId: "xyz2",
        title: "task1",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
      {
        taskId: "xyz1",
        title: "task2",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
    ],
  },
  {
    userId: "Ayush",
    group: "InProgress",
    items: [
      {
        taskId: "xyz4",
        title: "task4",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
      {
        taskId: "xyz3",
        title: "task3",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
    ],
  },
  {
    userId: "Ayush",
    group: "Completed",
    items: [
      {
        taskId: "xyz5",
        title: "task5",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
      {
        taskId: "xyz6",
        title: "task6",
        content: "qwertyuiopasdfghjklzxcvbnm",
        date: "1234567890",
      },
    ],
  },
];

const TaskDashboard = () => {
  const [tasks, setTasks] = useState(DATA);

  const handleDragAndDrop = (results) => {
    console.log(results);
    const { source, destination } = results;
    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const taskSourceGroup = tasks.findIndex(
      (task) => task.group === source.droppableId
    );
    const taskDestinationGroup = tasks.findIndex(
      (task) => task.group === destination.droppableId
    );

    const newSourceItems = [...tasks[taskSourceGroup].items];
    const newDestinationItems =
      source.droppableId !== destination.droppableId
        ? [...tasks[taskDestinationGroup].items]
        : newSourceItems;

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, deletedItem);

    const newTasks = [...tasks];

    newTasks[taskSourceGroup] = {
      ...tasks[taskSourceGroup],
      items: newSourceItems,
    };
    newTasks[taskDestinationGroup] = {
      ...tasks[taskDestinationGroup],
      items: newDestinationItems,
    };

    setTasks(newTasks);
  };

  return (
    <>
      <DragDropContext onDragEnd={handleDragAndDrop}>
        <Dropdown/>
        <div className="px-6 flex mt-4 items-center justify-center">
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

const Task = ({ taskId, title, content, date, index }) => {
  return (
    <>
      <Draggable draggableId={taskId} index={index}>
        {(provided) => (
          <div
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            className="bg-white w-full mx-6 h-auto py-4 rounded-2xl"
          >
            <div className="grid grid-cols-2">
              <div className="flex  pt-2 justify-start">
                <img src="pink.png" className="w-4 h-4" alt="" />
                <h1 className=" text-[10px] text-gray-400 uppercase font-medium">
                  Development
                </h1>
              </div>
              <div className="flex px-4 relative -top-1 pt-2 justify-end">
                <button>
                  {" "}
                  <img src="tdots.svg" className="w-6 h-6" alt="" />
                </button>
              </div>
            </div>
            <h1 className="px-4 pt-1 text-lg font-bold ">{title}</h1>
            <p className="px-4 pt-2 text-xs text-gray-600">{content}</p>
            <div class=" pt-4 px-4 ">
              <div className="grid grid-cols-2">
                <div className="flex  -space-x-4 justify-start">
                  <img
                    class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1699343481899-b20bd561c64e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <img
                    class="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1698778573868-75a5c62ab43e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="flex justify-end">
                  <button className="text-xs  bg-[#22C8AA] rounded-lg px-4 text-gray-50">{date}</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default TaskDashboard;
