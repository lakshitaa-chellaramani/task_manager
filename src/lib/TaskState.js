import React, { useEffect } from 'react';
import TaskContext from './taskContext';
import { getDatabase, ref, onValue, update, off } from 'firebase/database';
import app from './firebase';
import { useAuth } from './auth';

const TaskState = ({ children }) => {
    const { userId } = useAuth();
    const database = getDatabase(app);

    const [tasks, setTasks] = React.useState([
        { userId, group: 'ToDo', items: [] },
        { userId, group: 'InProgress', items: [] },
        { userId, group: 'Completed', items: [] },
    ]);

    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalGroup, setModalGroup] = React.useState(null);   

useEffect(() => {
    const databaseRef = ref(database, `/tasks/${userId}`);
    const getData = onValue(databaseRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const newDataArray = Object.values(data).map((group) => ({
                ...group,
                items: group.items || [], 
            }));
            console.log(userId)
            setTasks(newDataArray);
        }
    });

    return () => {
        off(databaseRef, getData);
    };
}, [userId, database]);

    const handleDragAndDrop = (results) => {
        const { source, destination } = results;
        if (!destination) return;

        const taskSourceGroupIndex = tasks.findIndex((taskGroup) => taskGroup.group === source.droppableId);
        const taskDestinationGroupIndex = tasks.findIndex((taskGroup) => taskGroup.group === destination.droppableId);

        const newSourceItems = [...tasks[taskSourceGroupIndex].items];
        const newDestinationItems = source.droppableId !== destination.droppableId
            ? [...tasks[taskDestinationGroupIndex].items]
            : newSourceItems;

        const [draggedItem] = newSourceItems.splice(source.index, 1);
        newDestinationItems.splice(destination.index, 0, draggedItem);

        const newTasks = [...tasks];
        newTasks[taskSourceGroupIndex] = { ...tasks[taskSourceGroupIndex], items: newSourceItems };
        newTasks[taskDestinationGroupIndex] = { ...tasks[taskDestinationGroupIndex], items: newDestinationItems };

        // Update data in Firebase
        const databaseRef = ref(database);
        update(databaseRef, { [`/tasks/${userId}`]: newTasks });

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

            newTasks[taskGroupIndex] = { ...tasks[taskGroupIndex], items: [...tasks[taskGroupIndex].items, newTask] };

            const databaseRef = ref(database);
            update(databaseRef, { [`/tasks/${userId}`]: newTasks });

            setModalOpen(false);
            setTasks(newTasks);
        }
    };

    const handleDeleteTask = (taskId) => {
        const taskGroupIndex = tasks.findIndex(
            (taskGroup) => taskGroup.items.some((task) => task.taskId === taskId)
        );

        if (taskGroupIndex !== -1) {
            const newTasks = [...tasks];
            const taskIndex = newTasks[taskGroupIndex].items.findIndex((task) => task.taskId === taskId);

            newTasks[taskGroupIndex].items.splice(taskIndex, 1);

            const databaseRef = ref(database);
            update(databaseRef, { [`/tasks/${userId}`]: newTasks });

            setTasks(newTasks);
        }
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                setTasks,
                handleDragAndDrop,
                handleAddTask,
                handleDeleteTask,
                modalOpen,
                setModalOpen,
                modalGroup,
                setModalGroup,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskState;
