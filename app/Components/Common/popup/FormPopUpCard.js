/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { Text } from 'react-native'
import { FormPopUpCardLayout, CardButton, FormList } from 'app/components/common'
import EntryActions from 'app/stores/Entry/Actions'
import { useMappedAction } from 'app/hooks'

const mapActions = {
  createEntry: EntryActions.requestCreateEntry,
}

export const FormPopUpCard = React.memo((props) => {
  const { createEntry } = useMappedAction(mapActions)

  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [duration, setDuration] = useState(0)
  const [learning, setLearning] = useState(1)
  const [satisfaction, setSatisfaction] = useState(1)
  const [involvement, setInvolvement] = useState(1)

  return (
    <FormPopUpCardLayout
      visible={props.visible}
      hide={() => props.hide()}
      TopPop={<Text style={styles.HeadingStyle}>{`${props.category} Form`}</Text>}
      MidPop={
        <FormList
          formFields={{ date, notes, duration, learning, satisfaction, involvement }}
          setDate={(value) => setDate(value)}
          setNotes={(value) => setNotes(value)}
          setDuration={(value) => setDuration(value)}
          setLearning={(value) => setLearning(value)}
          setSatisfaction={(value) => setSatisfaction(value)}
          setInvolvement={(value) => setInvolvement(value)}
        />
      }
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
            createEntry(props.category, date, notes, duration, learning, satisfaction, involvement)
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
