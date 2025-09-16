import React,{ useState } from "react";

const Tasklist = () => {
    const [tasks, setTasks] = useState([
        {name: "Task 1", status: "not done"},
        {name: "Task 2", status: "done"},
        {name: "Task 3", status: "done"}
    ]);

    const toggleStatus = ( taskindex) => {
        const updatedTasks = tasks.map((task,index) => {
            if(index === taskindex) {
                return {
                    ...task,
                 status: task.status === "done" ? "not done" : "done"};
            }
            return task;
        });
        setTasks(updatedTasks);
    }
    return (
        <div>
            <h1> Employee Task Management </h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                       <span> {task.name} - {task.status}</span>
                        <button onClick={() => toggleStatus(index)}>
                            Toggle Status
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Tasklist;
