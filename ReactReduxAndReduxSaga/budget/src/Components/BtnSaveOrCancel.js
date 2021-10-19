import React from "react"
import { Button } from "semantic-ui-react"

export const BtnSaveOrCancel = () => {
    return (
        <Button.Group style = {{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <Button.Or />
          <Button primary>Save</Button>
        </Button.Group>
    )
}