import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { setTopLevelNavigator } from 'app/services/navigation'
// import { ExampleScreen } from 'app/screens/ExampleScreen'
import { HomeScreen } from 'app/screens/HomeScreen'

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
)

const AppContainer = createAppContainer(AppNavigator)

export const RootScreen = () => (
  <AppContainer ref={(navigatorRef) => setTopLevelNavigator(navigatorRef)} />
)
