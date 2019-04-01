import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { useOnMount, useMappedAction } from 'app/hooks'
import { setTopLevelNavigator } from 'app/services/navigation'
import { HomeScreen } from 'app/screens/HomeScreen'
import { WebScreen } from 'app/screens/WebScreen'
import StartupActions from 'app/stores/Startup/Actions'

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
const mapActions = {
  startup: StartupActions.startup,
}

export const RootScreen = () => {
  const { startup } = useMappedAction(mapActions)

  useOnMount(() => {
    startup()
  })

  return <AppContainer ref={(navigatorRef) => setTopLevelNavigator(navigatorRef)} />
}
