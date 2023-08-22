import { Button, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        You chose Pizza! Choose one ingredient:
        <Button payload='sausage'>Sausage</Button>
        <Button payload='bacon'>Bacon</Button>
      </Text>
    )
  }
}
