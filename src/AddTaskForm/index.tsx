import React from 'react'
import { Field } from '../Field'
import { Button } from '../Button'
import { ITask } from '../interfaces'

interface AddTaskProps {
    addTask: (task: ITask) => void
}

export class AddTaskForm extends React.Component<AddTaskProps> {
    state = {
        inputValue: ''
    }

    onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleButtonClick = () => {
        if(!this.state.inputValue) return
        const task = { 
            date: Date.now(),
            text: this.state.inputValue
        }
        this.props.addTask(task)
        this.state.inputValue = ''
    }

    render() {
        return (
            <>
                <Field 
                    inputValue={this.state.inputValue} 
                    onInputChange={this.onInputChange}
                />
                <Button 
                    handleButtonClick={this.handleButtonClick}
                    textLabel="Add task"
                />
            </>
        )
    }
}
