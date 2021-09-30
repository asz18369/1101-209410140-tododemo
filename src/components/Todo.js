import React from 'react'

function Todo_40(props) {
    return(
        <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
            <button className="btn">Delete</button>
        </div>
    </div>
    );
}

export default Todo_40;