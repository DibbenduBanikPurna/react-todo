import React, { useState } from 'react';
import TodoList from './TodoList';

const Form = () => {
    const [data, setData] = useState({})
    const [tasks, setTasks] = useState([])
    const [isTrue, setIsTrue] = useState(true)
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
            id: Math.random(),

        })
    }
    const handleDelete = (id) => {
        const remainTask = tasks.filter((task) => task.id !== id)
        setTasks(remainTask)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (tasks !== "") {
            setTasks([...tasks, data])
        }
        else {
            alert("Enter Task Sir...")
        }




    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 m-auto">
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" name="task" onChange={handleChange} type="text" placeholder="Enter Work" />
                        <br />
                        <input className="btn btn-lg btn-primary" type="submit" value="Submit" />
                    </form>
                    <br />
                    {
                        tasks.map((data) => {
                            return <TodoList isTrue={isTrue} handleDelete={handleDelete} key={data.id} data={data} />
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default Form;