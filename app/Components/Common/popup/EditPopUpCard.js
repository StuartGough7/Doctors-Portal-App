/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FormPopUpCardLayout, CardButton, FormList } from 'app/components/common'
import EntryActions from 'app/stores/Entry/Actions'
import { useMappedAction } from 'app/hooks'

const mapActions = {
  updateEntry: EntryActions.requestUpdateEntry,
  deleteEntry: EntryActions.requestDeleteEntry,
}

export const EditPopUpCard = React.memo((props) => {
  const { updateEntry, deleteEntry } = useMappedAction(mapActions)

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [duration, setDuration] = useState(0)
  const [learning, setLearning] = useState(1)
  const [satisfaction, setSatisfaction] = useState(1)
  const [involvement, setInvolvement] = useState(1)

  useEffect(() => {
    setTitle(props.values.title)
    setDate(props.values.date)
    setNotes(props.values.notes)
    setDuration(props.values.duration)
    setLearning(props.values.learning)
    setSatisfaction(props.values.satisfaction)
    setInvolvement(props.values.involvement)
  }, [props.values])

  return (
    <FormPopUpCardLayout
      visible={props.visible}
      hide={() => {
        props.hide()
      }}
      TopPop={<Text style={styles.HeadingStyle}>{`Edit ${props.category} Activity`}</Text>}
      MidPop={
        <>
          <FormList
            formFields={{ title, date, notes, duration, learning, satisfaction, involvement }}
            setTitle={(value) => setTitle(value)}
            setDate={(value) => setDate(value)}
            setNotes={(value) => setNotes(value)}
            setDuration={(value) => setDuration(value)}
            setLearning={(value) => setLearning(value)}
            setSatisfaction={(value) => setSatisfaction(value)}
            setInvolvement={(value) => setInvolvement(value)}
          />
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => {
              deleteEntry(props.category, props.completedAt)
              props.OnPress()
            }}
          >
            <Text>Delete</Text>
          </TouchableOpacity>
        </>
      }
      BotPop1={
        <CardButton
          Text={'Cancel'}
          OnPress={() => {
            props.hide()
          }}
          styles={{ borderBottomRightRadius: 35, borderTopRightRadius: 35 }}
        />
      }
      BotPop2={
        <CardButton
          Text={'Update'}
          OnPress={() => {
            updateEntry(
              props.completedAt,
              props.category,
              title,
              date,
              notes,
              duration,
              learning,
              satisfaction,
              involvement
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
  deleteButton: {
    marginTop: 10,
    textAlign: 'center',
    color: '#240F48',
    fontSize: 10,
    fontWeight: 800,
  },
}
