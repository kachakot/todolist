import React from 'react'

import { AddTask } from '../AddTask'
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

    editTask = (date:number, text:string) => {
        const newTasks = this.state.tasks.map(task => {
            if (task.date === date) {
                task.text = text
            }
            return task
        })
        this.setState({
            tasks: newTasks
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
                <AddTask
                    addTask={this.addTask}
                />
                <TasksList
                    tasksList={this.state.tasks}
                    editTask={this.editTask}
                    removeTask={this.removeTask}
                />
            </>
        )
    }
}
