import React from "react"
import { Checkbox, Form, Segment } from "semantic-ui-react"

export const EntryForm = ({ description, value, isExpense, setDescription, setValue, setIsExpense }) => {

    return (
        <>
            <Form.Group>
                <Form.Input 
                    placeholder = "new shiny thing"
                    icon = "tags"
                    width = {12}
                    label = "Description"
                    value = { description }
                    onChange = {(event) => setDescription(event.target.value)}
                />
                <Form.Input 
                    width = {4}
                    label = "Value"
                    placeholder = "100.00"
                    icon = "dollar"
                    iconPosition = "left"
                    value = { value }
                    onChange = {(event) => setValue(event.target.value)}
                />
            </Form.Group>

            <Segment compact >
                <Checkbox 
                    toggle 
                    label = "is expense" 
                    checked = {isExpense} 
                    onChange = {() => setIsExpense(!isExpense)}
                />
            </Segment>
        </>
    )
}
