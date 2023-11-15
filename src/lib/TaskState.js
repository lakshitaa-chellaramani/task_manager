import React from 'react'
import TaskContext from './taskContext'

const DATA = [
    {
        userId: "Ayush",
        group: "ToDo",
        items: [
            {
                taskId: "xyz2",
                title: "task1",
                content: "qwertyuiopasdfghjklzxcvbnm",
                date: new Date().toISOString(),
            },
            {
                taskId: "xyz1",
                title: "task2",
                content: "qwertyuiopasdfghjklzxcvbnm",
                date: new Date().toISOString(),
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
                date: new Date().toISOString(),
            },
            {
                taskId: "xyz3",
                title: "task3",
                content: "qwertyuiopasdfghjklzxcvbnm",
                date: new Date().toISOString(),
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
                date: new Date().toISOString(),
            },
            {
                taskId: "xyz6",
                title: "task6",
                content: "qwertyuiopasdfghjklzxcvbnm",
                date: new Date().toISOString(),
            },
        ],
    },
];

const TaskState = ({ children }) => {
    const [tasks, setTasks] = React.useState(DATA);
    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalGroup, setModalGroup] = React.useState(null);

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

    const handleAddTask = ({ title, content, group }) => {
        const taskGroupIndex = tasks.findIndex((taskGroup) => taskGroup.group === group);

        if (taskGroupIndex !== -1) {
            const newTasks = [...tasks];
            const newTask = {
                taskId: Date.now().toString(),
                title,
                content,
                date: new Date().toISOString(),
            };
            console.log(newTask)
            newTasks[taskGroupIndex] = {
                ...tasks[taskGroupIndex],
                items: [...tasks[taskGroupIndex].items, newTask],
            };

            setTasks(newTasks);
            setModalOpen(false);
        }
    };

    const handleDelete = (taskId) => {
        const taskGroupIndex = tasks.findIndex(
            (taskGroup) => taskGroup.items.some((task) => task.taskId === taskId)
        );
        const taskIndex = tasks[taskGroupIndex].items.findIndex(
            (task) => task.taskId === taskId
        );

        const newTasks = [...tasks];
        newTasks[taskGroupIndex].items.splice(taskIndex, 1);

        setTasks(newTasks);
    };

    return (
        <>
            <TaskContext.Provider value={{ tasks, setTasks, handleDragAndDrop, handleAddTask, handleDelete, modalOpen, setModalOpen, modalGroup, setModalGroup }}>
                {children}
            </TaskContext.Provider>
        </>
    )
}

export default TaskState