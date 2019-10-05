import React from 'react'

import { AddTaskForm } from '../AddTaskForm'
import { TasksList } from '../TasksList'
import { ITask } from '../interfaces'

interface TasksPanelState {
    tasks: ITask[]
}

export class TasksPanel extends React.Component {
    state: TasksPanelState  = {
        tasks: []
    }

    addTask = (task: ITask) => {
        this.setState((prevState: TasksPanelState) => {
            prevState.tasks.push(task)
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
            return prevState
        })
    }

    removeTask = (date:number) => {
        const filteredTasks = this.state.tasks.filter(task => task.date !== date)
        this.setState({
            tasks: filteredTasks
        })
    }

    componentDidMount() {
        const tasksString = localStorage.getItem('tasks')
        if (tasksString) {
            const tasks = JSON.parse(tasksString)
            this.setState({
                tasks: tasks
            })
        }
    }
    
    render() {
        return (
            <>
                <AddTaskForm
                    addTask={this.addTask}
                />
                <TasksList
                    tasksList={this.state.tasks}
                    removeTask={this.removeTask}
                />
            </>
        )
    }
}
