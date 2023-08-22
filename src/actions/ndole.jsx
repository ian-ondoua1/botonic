import { Button, Reply, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        You chose Ndole! Choose one complement:
        <Button payload='plantain'>Plantain</Button>
        <Button payload='bobolo'>Bobolo</Button>
      </Text>
    )
  }
}