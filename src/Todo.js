import React from "react";

export default function Todo({ title, description, dateCreated, dateCompleted, complete, dispatch, deleted }) {
    function handleChecked(evt) {
        dispatch({type: 'TOGGLE_TODO', title, description, dateCreated, dateCompleted: Date(Date.now()), complete: evt.target.checked})
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>{`Date Created: ` + dateCreated}</div>
            <br />
            <label htmlFor="complete-checkbox">Completed:</label>
            <input type="checkbox" name="complete-checkbox" value={complete} onChange={handleChecked}/>
            <div>Complete {complete}</div>
            <div>Completed Date: {dateCompleted}</div>
        </div>
    )
}