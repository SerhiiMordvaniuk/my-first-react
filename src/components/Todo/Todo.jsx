import { useState } from "react"
import s from "./Todo.module.css"

const Todo = () => {
    const [todoList, setTodoList] = useState({
        first: "lalala"
    })

    const inputTxt = 0;
    return (
        <>
            <input type="text" name="todo" id="todo" />
            <button type="submit">Add</button>
            <ul>
                <li>
                    <p>{ todoList.first}</p>
                    <button>Delete</button>
                </li>
            </ul>
        </>
    )
}

export default Todo