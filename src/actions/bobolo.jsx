import { Text, Image } from '@botonic/react'
import React from 'react'

export default class extends React.Component {
  render() {
    return (
      <div>
        <Text>You chose Bobolo on Ndole, Enjoy your meal !</Text>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROe33aVihsgrF4ZM23eVs68ZDQxotBTDMjn3kefHxyUuk04ux4O9Sf-xe-ef3ZMaJwbH4&usqp=CAU' alt='image' />
      </div>
    )
   
  }
}