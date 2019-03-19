import React, { useState } from 'react'
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
  FormPopUpCard,
} from 'app/components/common'

export const HomeScreen = () => {
  const [pop, setPop] = useState(false)
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
          <StandardButton Text={'Add Activity'} OnPress={() => setPop(true)} />
          <FormPopUpCard
            visible={pop}
            OnPress={() => setPop((pop) => !pop)}
            hide={() => setPop(false)}
          />
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
