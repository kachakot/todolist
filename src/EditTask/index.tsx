import React from 'react'

import { Field } from '../Field'
import { Button } from '../Button'
import { kinds } from '../Button/styles'

interface EditTaskProps {
    editTask: (date: number, text: string) => void,
    taskDate: number
}

interface EditTaskState {
    inputValue: string,
    isActive: boolean
}

export class EditTask extends React.Component<EditTaskProps, EditTaskState> {
    state = {
        inputValue: '',
        isActive: false
    }

    handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            inputValue: e.currentTarget.value
        })
    }

    handleButtonClick = () => {
        this.setState((prevState) => {
            const newState = {...prevState}
            newState.isActive = !newState.isActive
            return newState
        })
        this.state.isActive && this.props.editTask(this.props.taskDate, 
            this.state.inputValue)
    }

    render() {
        return (
            <>
                {this.state.isActive &&
                    <Field
                        inputValue={this.state.inputValue}
                        handleInputChange={this.handleInputChange}
                    />
                }
                <Button
                    handleButtonClick={this.handleButtonClick}
                    kind={kinds.edit}
                    textLabel={this.state.isActive ? 'Approve' : 'Edit'}
                ></Button>
            </>
        )
    }
}
