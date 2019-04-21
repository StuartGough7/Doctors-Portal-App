/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View, Text } from 'react-native'
import { TextIn } from 'app/components/common'
import Slider from '@react-native-community/slider'

export const FormList = React.memo((props) => {
  return (
    <>
      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Title:</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Note Title"
            value={props.formFields.title}
            onChangeText={(value) => props.setTitle(value)}
          />
        </View>
      </View>
      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Date:</Text>
        </View>
        <View style={styles.Split2}>
          <TextIn
            wrong={false}
            placeholder="Insert Date"
            value={props.formFields.date}
            onChangeText={(value) => props.setDate(value)}
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
            value={props.formFields.notes}
            onChangeText={(value) => props.setNotes(value)}
          />
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Duration:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={styles.slider}
            step={1}
            value={props.formFields.duration}
            minimumValue={0}
            maximumValue={180}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => props.setDuration(value)}
          />
          <Text style={styles.textStyle}>{props.formFields.duration}</Text>
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Learning Experience:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={styles.slider}
            step={1}
            value={props.formFields.learning}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => props.setLearning(value)}
          />
          <Text style={styles.textStyle}>{props.formFields.learning}</Text>
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Personal Satisfaction:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={styles.slider}
            step={1}
            value={props.formFields.satisfaction}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => props.setSatisfaction(value)}
          />
          <Text style={styles.textStyle}>{props.formFields.satisfaction}</Text>
        </View>
      </View>

      <View style={styles.Section}>
        <View style={styles.Split1}>
          <Text style={styles.textStyle}>Involvement:</Text>
        </View>
        <View style={styles.Split2}>
          <Slider
            style={styles.slider}
            step={1}
            value={props.formFields.involvement}
            minimumValue={1}
            maximumValue={5}
            minimumTrackTintColor="#240F48"
            maximumTrackTintColor="rgba(160,160,160,0.6)"
            onValueChange={(value) => props.setInvolvement(value)}
          />
          <Text style={styles.textStyle}>{props.formFields.involvement}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textStyle: {
    color: '#240F48',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  slider: {
    height: '50%',
    width: '80%',
  },
}
