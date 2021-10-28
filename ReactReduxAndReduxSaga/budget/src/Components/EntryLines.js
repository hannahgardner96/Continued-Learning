import React from "react"
import { EntryLine } from "./EntryLine"

export const EntryLines = ({ entries }) => {
    return (
        <>
            {entries.map((entry) => {
                return <EntryLine 
                    key = { entry.id }
                    { ...entry }
                />
            })}
        </>
    )
}