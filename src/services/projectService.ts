// Simulated API for task management
export interface Task {
    id: string;
    title: string;
    status: 'todo' | 'in-progress' | 'done';
}

// Initial Dummy Data
let tasks: Task[] = [
    {id: '1', title: 'Design UI', status: 'todo'},
    {id: '2', title: 'Develop API', status: 'in-progress'},
    {id: '3', title: 'Write Tests', status: 'done'},
];

export const fetchTasks = async (): Promise<Task[]> => {
    // Simulate an API delay
    return new Promise((resolve) => {
        setTimeout(() => resolve(tasks), 500);
    });
};

export const addTask = async (task: Task): Promise<void> => {
    return new Promise((resolve) => {
        tasks.push(task);
        setTimeout(resolve, 500);
    });
};

export const updateTask = async (updatedTask: Task): Promise<void> => {
    return new Promise((resolve) => {
        tasks = tasks.map((task) => 
            task.id === updatedTask.id ? updatedTask : task
        );
        setTimeout(resolve, 500);
    });
};