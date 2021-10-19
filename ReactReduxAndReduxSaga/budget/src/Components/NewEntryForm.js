import React from "react"
import { Form } from "semantic-ui-react"
import { BtnSaveOrCancel } from "./BtnSaveOrCancel"
import { EntryForm } from "./EntryForm"

export const NewEntryForm = ({ description, value, isExpense, setDescription, setValue, setIsExpense, addEntry }) => {
    return (
        <Form unstackable>
            <EntryForm 
                description = { description } 
                value = { value } 
                isExpense = { isExpense }
                setDescription = { setDescription }
                setValue = { setValue }
                setIsExpense = { setIsExpense }
            />

            <BtnSaveOrCancel addEntry = { addEntry } />
        </Form>
    )
}