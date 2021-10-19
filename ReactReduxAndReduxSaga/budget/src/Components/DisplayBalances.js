import React from "react"
import { Grid, Segment } from "semantic-ui-react"
import { DisplayBalance } from "./DisplayBalance"

export const DisplayBalances = () => {
    return (
        <Segment textAlign = "center">
        <Grid columns = {2} divided>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title = "Income" value = {1345.78} color = "green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title = "Expenses" value = {764.21} color = "red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
}