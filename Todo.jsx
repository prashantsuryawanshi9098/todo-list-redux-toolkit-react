import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../feature/todo/todoSlice'

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-3 rounded"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
