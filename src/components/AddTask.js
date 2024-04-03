import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({tasks, setTasks}) => {

    const [taskValue, setTaskValue] = useState(''); // [state, setState
    const [taskProgress, setTaskProgress] = useState(false); // [state, setState

    const handleChnage = (event) => {
        setTaskValue(event.target.value);
    }

    const handleReset = () => {
        setTaskValue('');
        setTaskProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const task={
            id: Math.floor(Math.random() * 10000),
            name: taskValue,
            completed: Boolean(taskProgress)
        }
        setTasks([...tasks, task]);
        console.log(task);

        handleReset();
    }


    return (
        <section className="addtask">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChnage} type="text" id="task" name="task" placeholder="Task Name" autoComplete="off" value={taskValue} />
                <select onChange={(event)=> setTaskProgress(event.target.value)} value={taskProgress}>
                    <option value={false}>Incomplete</option>
                    <option value={true}>Completed</option>
                </select>
                <button type="submit">Add Task</button>
                <span onClick={handleReset} className="reset">Reset</span>
            </form>
            <p>{taskValue}</p>
        </section>
    )
}

