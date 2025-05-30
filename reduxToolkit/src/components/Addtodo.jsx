import React ,{useState} from 'react'

import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function Addtodo() {

    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(todoText))
        setTodoText('')
    }
    
    return (
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
            <input
                type='text'
                className='bg-grey-800 rounded-border border-gray-300 text-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Add Todo'
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Add Todo
            </button>
        </form>
    )
}

export default Addtodo;