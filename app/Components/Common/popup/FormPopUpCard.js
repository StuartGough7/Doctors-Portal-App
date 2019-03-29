/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text } from 'react-native'
import { FormPopUpCardLayout, CardButton, FormList } from 'app/components/common'
import ProfileActions from 'app/stores/Profile/Actions'
import { useMappedAction } from 'app/hooks'

const mapActions = {
  createProfile: ProfileActions.requestCreateProfile,
}

export const FormPopUpCard = React.memo((props) => {
  const { createProfile } = useMappedAction(mapActions)
  return (
    <FormPopUpCardLayout
      visible={props.visible}
      hide={() => props.hide()}
      TopPop={<Text style={styles.HeadingStyle}>{`${props.category} Form`}</Text>}
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
            createProfile(
              'Datea',
              'categoray',
              'Noteas',
              'Durataion',
              'Learaning',
              'Satisafaction',
              'Involvement'
            )
            props.hide()
          }}
          styles={{ borderBottomLeftRadius: 35, borderTopLeftRadius: 35 }}
        />
      }
    />
  )
})

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
