import React from 'react'

import { AddTaskForm } from '../AddTaskForm'
import { TasksList } from '../TasksList'

interface TasksPanelState {
    tasks: string[]
}

export class TasksPanel extends React.Component {
    state: TasksPanelState  = {
        tasks: []
    }

    addTask = (task: string) => {
        this.setState((prevState: TasksPanelState) => {
            prevState.tasks.push(task)

            return prevState
        })
    }

    render() {
        return (
            <>
                <AddTaskForm
                    addTask={this.addTask}
                />
                <TasksList
                    tasksList={this.state.tasks}
                />
            </>
        )
    }
}
