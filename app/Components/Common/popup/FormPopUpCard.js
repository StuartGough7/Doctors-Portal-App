/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text } from 'react-native'
import { FormPopUpCardLayout, CardButton, FormList } from 'app/components/common'

export const FormPopUpCard = (props) => {
  return (
    <FormPopUpCardLayout
      visible={props.visible}
      hide={() => props.hide()}
      TopPop={<Text style={styles.HeadingStyle}> Form Fill </Text>}
      MidPop={<FormList />}
      BotPop1={
        <CardButton
          Text={'Cancel'}
          OnPress={() => props.hide()}
          styles={{ borderBottomRightRadius: 35, borderTopRightRadius: 35 }}
        />
      }
      BotPop2={
        <CardButton
          Text={'Submit'}
          OnPress={() => {
            // TODO
            props.hide()
          }}
          styles={{ borderBottomLeftRadius: 35, borderTopLeftRadius: 35 }}
        />
      }
    />
  )
}

const styles = {
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#fff',
  },
  Section1: {
    flex: 0.2,
  },
  Section2: {
    flex: 0.6,
  },
  Section3: {
    flex: 0.2,
  },
  HeadingStyle: {
    color: '#240F48',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}
