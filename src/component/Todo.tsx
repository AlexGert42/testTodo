import React from 'react';

type propsType = {
    id: string
    text: string
    flag: boolean
    priority: string
    title: string
}

const background = {
    success: {
        backgroundColor: 'green'
    }
}

export const Todo = ({text, title, flag, priority}: propsType) => {


    return (
        <div className='todo'>
            <div className="todo__inner">
                <div className="todo__row">
                    <p>{title}</p>
                    <input type="checkbox"/>
                </div>
                <div className="todo__row">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}