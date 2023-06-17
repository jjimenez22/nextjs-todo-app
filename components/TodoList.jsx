import React from 'react'

import Todo from './Todo'

export default function TodoList ({todos, onRemove}) {
    const renderTodo = (todo) => (
        <div key={todo.id} className='grid grid-cols-2 grid-gap-2 justify-items-start'>
            <Todo value={todo.value}/>
            <button onClick={() => onRemove(todo.id)} className='text-red-500'>Remove</button>
        </div>
    )

    return (
        <div className='max-w-2xl'>
            {todos.map(renderTodo)}
        </div>
    )
}