import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/todo/todoSlice'

const AddTodo = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodohandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className='pb-5 text-black font-bold text-3xl'>Todo List </h1>
      <form onSubmit={addTodohandler} className="space-y-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo
