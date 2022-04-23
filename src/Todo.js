import React, { useState } from "react";

export default function Todo({ title, description }) {

    const date = new Date().toLocaleDateString()
    
    const createdDate = date
    const completeDate = date
    
    const [ checked, setChecked ] = useState(false)
    function handleOnChange(evt) {
        setChecked(evt.target.checked)
        
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>{`Date Created: ` + createdDate}</div>
            <br />
            <label htmlFor="complete-checkbox">Completed:</label>
            <input type="checkbox" name="complete-checkbox" value={checked} onChange={handleOnChange}/>
            <div>Completed Date: {checked === true ? completeDate : "Uncomplete"}</div>
        </div>
    )
}