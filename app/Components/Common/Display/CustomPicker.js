import React, { useState } from 'react'
import { View, Picker } from 'react-native'

export const CustomPicker = React.memo((props) => {
  const [Value, SetValue] = useState('Select a Domain')

  return (
    <View style={styles.CoverView}>
      <Picker
        selectedValue={Value}
        style={styles.containerStyle}
        itemStyle={styles.itemStyle}
        onValueChange={(itemValue, itemIndex) => {
          SetValue(itemValue)
          props.SetValue(itemValue)
        }}
        mode={'dropdown'}
      >
        <Picker.Item label="Paediatrics" value="Paediatrics" />
        <Picker.Item label="Orthopaedics/Orthopaedic Trauma" value="Orthopaedics" />
        <Picker.Item label="Anaesthesiology" value="Anaesthesiology" />
        <Picker.Item label="Family Medicine/Primary Care" value="Family Medicine/Primary Care" />
        <Picker.Item label="General Medicine" value="General Medicine" />
        <Picker.Item label="General Surgery" value="General Surgery" />
        <Picker.Item label="Obstetrics and Gynaecology" value="Obstetrics and Gynaecology" />
        <Picker.Item label="Psychiatry" value="Psychiatry" />
      </Picker>
    </View>
  )
})

const styles = {
  CoverView: {
    height: 100,
    width: '80%',
    marginBottom: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    width: '80%',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle: {
    color: '#fff',
    height: 100,
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
