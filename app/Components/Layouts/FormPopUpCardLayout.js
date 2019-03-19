/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'

export const FormPopUpCardLayout = React.memo((props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.2}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      onBackdropPress={() => props.hide()}
    >
      <View style={styles.background}>
        <View style={styles.ContainerSection}>
          <View style={styles.TopPop}>{props.TopPop}</View>
          <View style={styles.MidPop}>{props.MidPop}</View>
          <View style={styles.BotPop}>
            <View style={styles.BotPop1}>{props.BotPop1}</View>
            <View style={styles.BotPop2}>{props.BotPop2}</View>
          </View>
        </View>
      </View>
    </Modal>
  )
})

const styles = {
  ContainerSection: {
    height: '80%',
    width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  TopPop: {
    flex: 0.15,
    flexDirection: 'row',
  },
  MidPop: {
    flex: 0.55,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BotPop: {
    flex: 0.3,
    flexDirection: 'row',
  },
  BotPop1: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BotPop2: {
    flex: 0.5,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashed: {
    width: '100%',
    height: 2,
    borderWidth: 1,
    borderColor: 'rgb(29,149,196)',
    borderStyle: 'dashed',
  },
}
