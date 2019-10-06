import React from 'react'

import { Button } from '../Button'
import { ITask } from '../interfaces'
import { kinds } from '../Button/styles'
import { EditTask } from '../EditTask'

interface TasksListProps {
    tasksList: ITask[],
    editTask: (date: number, text:string) => void,
    removeTask: (date: number) => void
}

export const TasksList = ({tasksList, editTask, removeTask}:TasksListProps) => {
    return (
        <ul>
             {tasksList.map(task => 
                <li 
                    key={task.date}
                >
                    {task.text}
                    <EditTask
                        editTask={editTask}
                        taskDate={task.date}
                    />                    
                    <Button
                        kind={kinds.remove}
                        handleButtonClick={() => {removeTask(task.date)}}
                        textLabel="x"
                    ></Button>
                </li>
            )}
        </ul>
    )
}
