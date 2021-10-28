
import { Form } from "semantic-ui-react"
import { BtnSaveOrCancel } from "./BtnSaveOrCancel"
import { EntryForm } from "./EntryForm"
import { useEntryDetails } from "../Hooks/useEntryDetails"

export const NewEntryForm = () => {
    const {
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        addEntry
    } = useEntryDetails()
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