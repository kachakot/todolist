import React from 'react'

interface TasksListProps {
    tasksList: string[]
}

export const TasksList = ({tasksList}:TasksListProps) => {
    return (
        <ul>
             {tasksList.map(task => 
                <li key={task}>{task}</li>
            )}
        </ul>
    )
}
