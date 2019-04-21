import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { navigate } from 'app/services/navigation'
import { getAllEntriesByCategory } from 'app/stores/Entry'
import { useMappedState } from 'app/hooks'
import {
  LayoutNoBottom,
  OnlineLink,
  ColorDivider,
  CustomPicker,
  StandardButton,
  TextHeading,
  ActivityList,
  FormPopUpCard,
  EditPopUpCard,
} from 'app/components/common'

const mapState = (state) => ({
  entries: (category) => getAllEntriesByCategory(state, category),
})

export const HomeScreen = () => {
  const [pop, setPop] = useState(false)
  const [popEdit, setPopEdit] = useState(false)
  const [completedAt, setCompletedAt] = useState('')
  const [category, setCategory] = useState('Paediatrics')
  const [entriesList, setEntriesList] = useState([])
  const { entries } = useMappedState(mapState)
  useEffect(() => setEntriesList(entries(category)), [category, pop, popEdit])
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
          <CustomPicker SetValue={(item) => setCategory(item)} />
          <StandardButton Text={'Add Activity'} OnPress={() => setPop(true)} />
          <FormPopUpCard
            visible={pop}
            category={category}
            OnPress={() => setPop((pop) => !pop)}
            hide={() => setPop(false)}
          />
          <EditPopUpCard
            completedAt={completedAt}
            visible={popEdit}
            category={category}
            OnPress={() => setPopEdit(false)}
            hide={() => setPopEdit(false)}
          />
        </>
      }
      BotContent={
        <>
          <TextHeading Text={'Activity List'} />
          <ActivityList
            Edit={(item) => {
              setCompletedAt(item)
              setPopEdit(true)
            }}
            category={category}
            Entries={entriesList}
          />
        </>
      }
    />
  )
}
