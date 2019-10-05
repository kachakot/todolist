import React from 'react'
import { Field } from '../Field'
import { Button } from '../Button'

interface AddTaskProps {
    addTask: (task: string) => void
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
        this.props.addTask(this.state.inputValue)
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
                />
            </>
        )
    }
}
