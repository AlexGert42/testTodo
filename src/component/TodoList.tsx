import React from 'react';
import {Todo} from "./Todo";
import {v1} from "uuid";


const todo = [
    {id: v1(), title: 'new title', text: 'new todo', flag: false, priority: 'ligth'}
]



export const TodoList = () => {




    return (
        <div>
            {!todo ? null : todo.map(item => {
                return (
                    <Todo
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        flag={item.flag}
                        priority={item.priority}
                    />
                )
            })}
            <div>
                <button>Add</button>
                <button>Remove</button>
            </div>
        </div>
    )
}