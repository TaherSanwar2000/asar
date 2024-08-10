import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { MyStack } from './navigator/rootNavigator'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}

export default App