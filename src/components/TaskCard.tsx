import React from "react";
import { Task } from "../services/projectService";

interface TaskCardProps {
    task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    return (
        <div className="task-card">
            <h4>{task.title}</h4>
            <p>Status: {task.status}</p>
        </div>
    );
};

export default TaskCard;