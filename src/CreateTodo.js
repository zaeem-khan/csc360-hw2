import React, { useState } from "react";

export default function CreateTodo({ dispatch }) {

    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescr(evt) { setDescription(evt.target.value) }
    function handleCreate() {
        //const newTodo = { title, description }
        dispatch({ type: 'CREATE_TODO', title, description, dateCreated: Date(Date.now()), dateCompleted: null, complete: false })
    }

    return (
        <>
        <h1>Create a new Task</h1>
        <form onSubmit={(e) => { e.preventDefault(); handleCreate(e)} }>
            
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
                <label htmlFor="create-descr">Description:</label>
                <input type="text" value={description} onChange={handleDescr} name="create-descr" id="create-descr"/>
            </div>
            <input type="submit" value="Create" disabled={title.length === 0} />
        </form>
        </>
    )
}