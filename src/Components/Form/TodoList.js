import React, { useState } from 'react';
import { FaTrash, FaCheck } from 'react-icons/fa'
const TodoList = ({ data, handleDelete }) => {
    const [isTrue, setIsTrue] = useState(false)
    //const [show, setShow] = useState(false)
    // const handleUpdate = (id) => {
    //     console.log(id)
    //     setShow(true)
    // }
    console.log(isTrue)
    return (
        <div>
            <ul className="col-md-12 m-auto">

                <h6 className={isTrue ? 'text-warning' : 'text-light'}>  <span className="m-5" onClick={() => setIsTrue(true)}> {isTrue ? 'Completed' : <FaCheck />} </span>   {data.task} ({new Date().toLocaleTimeString()})   <span className="m-5" onClick={() => handleDelete(data.id)}><FaTrash /></span>  </h6>

            </ul>

        </div>
    );
};

export default TodoList;