import React from "react";
import Todo from "./Todo";

export default function TodoList({ todos = [], dispatch }) {

    return (
        <div>
            {todos.map((p, i) =>(
                <Todo {...p} dispatch={dispatch} key={"post-"+i} />
            ))}
        </div>
    )
}