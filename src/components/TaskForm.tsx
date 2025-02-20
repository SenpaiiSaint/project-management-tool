import React, {useState} from "react";
import { Task } from "../services/projectService";

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) return;
        const newTask: Task = {
            id: Date.now().toString(),
            title,
            status: 'todo',
        };
        onAddTask(newTask);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;