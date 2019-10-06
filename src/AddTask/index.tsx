import React from 'react'

import { Field } from '../Field'
import { Button } from '../Button'
import { ITask } from '../interfaces'
import { kinds } from '../Button/styles'

interface AddTaskProps {
    addTask: (task: ITask) => void
}

export class AddTask extends React.Component<AddTaskProps> {
    state = {
        inputValue: ''
    }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
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
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <>
                <Field 
                    inputValue={this.state.inputValue} 
                    handleInputChange={this.handleInputChange}
                />
                <Button
                    kind={kinds.add}
                    handleButtonClick={this.handleButtonClick}
                    textLabel="Add task"
                />
            </>
        )
    }
}
