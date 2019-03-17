import React from 'react'
import { View, Text } from 'react-native'
import { navigate } from 'app/services/navigation'
import { LayoutNoBottom, Linker } from 'app/components/common'


export const HomeScreen = () => {
  return (
    <LayoutNoBottom 
      TopContent={
        <Linker OnPress={()=> navigate('WebScreen', null)} >
          <Text> Link to Online  </Text>
        </Linker>
      }
      MidContent= {
        <View />
      }
      BotContent= {
        <View />
      }
    />
  )
}
