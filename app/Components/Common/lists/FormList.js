/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextIn } from 'app/components/common'
import Slider from '@react-native-community/slider'

export const FormList = React.memo((props) => {
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [duration, setDuration] = useState(0)
  const [learning, setLearning] = useState(1)
  const [satisfaction, setSatisfaction] = useState(1)
  const [involvement, setInvolvement] = useState(1)
  return (
    <>
      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Date:</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Date"
            value={date}
            onChangeText={(value) => {
              setDate(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Notes:</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Notes"
            value={notes}
            onChangeText={(value) => {
              setNotes(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Duration:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={{ width: '80%', height: 40 }}
            step
            value={duration}
            minimumValue={0}
            maximumValue={180}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => {
              setDuration(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Learning Experience:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={{ width: '80%', height: 40 }}
            step
            value={learning}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => {
              setLearning(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Personal Satisfaction:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={{ width: '80%', height: 40 }}
            step
            value={satisfaction}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => {
              setSatisfaction(value)
            }}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Involvement:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={{ width: '80%', height: 40 }}
            step
            value={involvement}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => {
              setInvolvement(value)
            }}
          />
        </View>
      </View>
    </>
  )
})

const styles = {
  Section: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    borderTopWidth: 2,
    borderColor: '#fff',
  },
  Split1: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Split2: {
    flex: 0.6,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#240F48',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}
