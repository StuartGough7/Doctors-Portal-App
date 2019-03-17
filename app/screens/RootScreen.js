import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { setTopLevelNavigator } from 'app/services/navigation'
import { HomeScreen } from 'app/screens/HomeScreen'
import { WebScreen } from 'app/screens/WebScreen'

const AppNavigator = createStackNavigator(
  {
    HomeScreen,
    WebScreen,
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
