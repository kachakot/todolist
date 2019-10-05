import React from 'react'

import { Button } from '../Button'
import { ITask } from '../interfaces'

interface TasksListProps {
    tasksList: ITask[],
    removeTask: (date: number) => void
}

export const TasksList = ({tasksList, removeTask}:TasksListProps) => {
    return (
        <ul>
             {tasksList.map(task => 
                <li 
                    key={task.date}
                >
                    {task.text}
                    <Button
                        handleButtonClick={() => {removeTask(task.date)}}
                        textLabel="x"
                    ></Button>
                </li>
            )}
        </ul>
    )
}
