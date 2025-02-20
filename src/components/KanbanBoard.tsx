import React, { useEffect, useState } from "react";
import { fetchTasks, Task, addTask } from "../services/projectService";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";

const KanbanBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTasks = async () => {
            const data = await fetchTasks();
            setTasks(data);
            setLoading(false);
        };
        loadTasks();
    }, []);

    const handleAddTask = async (task: Task) => {
        await addTask(task);
        setTasks(await fetchTasks());
    };

    if (loading) return <p>Loading tasks...</p>;

    return (
        <div>
            <h2>Project Management Tool</h2>
            <TaskForm onAddTask={handleAddTask} />
            <div className="kanban-board">
                <h3>To-Do</h3>
                {tasks
                    .filter((task) => task.status === 'todo')
                    .map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                <h3>In Progress</h3>
                {tasks 
                    .filter((task) => task.status === 'in-progress')
                    .map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
                <h3>Done</h3>
                {tasks
                    .filter((task) => task.status === 'done')
                    .map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))}
            </div>
        </div>
    );
};

export default KanbanBoard;