import React from 'react'
import { Text } from 'react-native'
import { navigate } from 'app/services/navigation'
import {
  LayoutNoBottom,
  Linker,
  ColorDivider,
  CustomPicker,
  StandardButton,
} from 'app/components/common'

export const HomeScreen = () => {
  return (
    <LayoutNoBottom
      TopContent={
        <>
          <Linker OnPress={() => navigate('WebScreen', null)}>
            <Text> Link to Online </Text>
          </Linker>
          <ColorDivider />
        </>
      }
      MidContent={
        <>
          <CustomPicker />
          <StandardButton Text={'Add Activity'} OnPress={() => {}} />
        </>
      }
      // BotContent={ }
    />
  )
}
