import React from 'react'
import { TextInput, View } from 'react-native'

export const TextIn = ({ label, value, onChangeText, placeholder, secureTextEntry, wrong }) => {
  return (
    <View style={styles.containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={wrong ? '#FF0000' : '#A9A9A9'}
        autoCorrect={false}
        selectionColor={'rgb(206,92,99)'}
        style={wrong ? styles.wrong : styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  )
}

const styles = {
  containerStyle: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(206,92,99)',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'left',
    paddingRight: 5,
    paddingLeft: 5,
  },
  wrong: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(206,92,99)',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'left',
    paddingRight: 5,
    paddingLeft: 5,
  },
}
