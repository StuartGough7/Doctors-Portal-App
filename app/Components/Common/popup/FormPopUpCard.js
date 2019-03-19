/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text } from 'react-native'
import { FormPopUpCardLayout } from 'app/components/common'

export const FormPopUpCard = (props) => {
  return (
    <FormPopUpCardLayout
      visible={props.visible}
      hide={() => props.hide()}
      TopPop={<Text> Form Fill </Text>}
      MidPop={<View />}
      BotPop1={<View />}
      BotPop2={<View />}
    />
  )
}
