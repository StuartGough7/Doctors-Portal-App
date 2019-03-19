import React from 'react'
import { Text } from 'react-native'
import { navigate } from 'app/services/navigation'
import {
  LayoutNoBottom,
  OnlineLink,
  ColorDivider,
  CustomPicker,
  StandardButton,
  TextHeading,
  ActivityList,
} from 'app/components/common'

export const HomeScreen = () => {
  return (
    <LayoutNoBottom
      TopContent={
        <>
          <OnlineLink OnPress={() => navigate('WebScreen', null)}>
            <Text> Link to Online </Text>
          </OnlineLink>
          <ColorDivider />
          <TextHeading Text={'Select A Domain Below'} />
        </>
      }
      MidContent={
        <>
          <CustomPicker />
          <StandardButton Text={'Add Activity'} OnPress={() => {}} />
        </>
      }
      BotContent={
        <>
          <TextHeading Text={'Activity List'} />
          <ActivityList />
        </>
      }
    />
  )
}
