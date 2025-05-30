import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todo.todos) // 👈 FIXED
    const dispatch = useDispatch()

    return (
        <>
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            style={{ marginLeft: '10px', color: 'red' }}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos
