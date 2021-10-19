import React from "react"
import { Form } from "semantic-ui-react"
import { BtnSaveOrCancel } from "./BtnSaveOrCancel"

export const NewEntryForm = () => {
    return (
        <Form unstackable>
            <Form.Group>
                <Form.Input 
                    placeholder = "new shiny thing"
                    icon = "tags"
                    width = {12}
                    label = "Description"
                />
                <Form.Input 
                    width = {4}
                    label = "Value"
                    placeholder = "100.00"
                    icon = "dollar"
                    iconPosition = "left"
                />
            </Form.Group>
            <BtnSaveOrCancel />
        </Form>
    )
}