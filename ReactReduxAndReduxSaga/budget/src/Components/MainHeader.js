import React from "react"
import { Header } from "semantic-ui-react"

export const MainHeader = ({ title, type = "h1" }) => {
    return <Header as = {type}>{title}</Header>
}