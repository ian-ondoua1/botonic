import { Button, Text } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <Text>
        Hi! Choose what you want to eat:
        <Button payload='pizza'>Pizza</Button>
        <Button path='pasta'>Pasta</Button>
        <Button path='ndole'>Ndole</Button>
        
      </Text>
      
    )
  }
}
