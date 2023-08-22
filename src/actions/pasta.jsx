import { Button, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        You chose Pasta! Choose one ingredient:
        <Button payload='cheese'>Cheese</Button>
        <Button payload='tomato'>Tomato</Button>
      </Text>
    )
  }
}
