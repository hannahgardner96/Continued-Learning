import React from "react"
import { EntryLine } from "./EntryLine"

export const EntryLines = ({ entries, deleteEntry, setIsOpen, editEntry }) => {
    return (
        <>
            {entries.map((entry) => {
                return <EntryLine 
                    key = { entry.id }
                    { ...entry }
                    deleteEntry = { deleteEntry }
                    setIsOpen = { setIsOpen }
                    editEntry = { editEntry }
                />
            })}
        </>
    )
}