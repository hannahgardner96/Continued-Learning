import React from "react"
import { Grid, Segment } from "semantic-ui-react"
import { DisplayBalance } from "./DisplayBalance"

export const DisplayBalances = ({ income, expenses }) => {
    return (
        <Segment textAlign = "center">
        <Grid columns = {2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title = "Income" value = { income } color = "green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title = "Expenses" value = { expenses } color = "red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}