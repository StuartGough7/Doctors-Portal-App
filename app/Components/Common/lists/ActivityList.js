import React from 'react'
import { SingleActivity } from 'app/components/common'
import { calculateDate } from 'app/services/Utils'
import { singleEntryDetailsByDateKey } from 'app/stores/Entry'
import { useMappedState } from 'app/hooks'

const mapState = (state) => ({
  singleEntryDetails: (category, date) => singleEntryDetailsByDateKey(state, category, date),
})
export const ActivityList = (props) => {
  const { singleEntryDetails } = useMappedState(mapState)

  const renderList = () =>
    props.Entries.map((item, index) => {
      const singleEntry = singleEntryDetails(props.category, item)
      console.warn([singleEntry])
      return (
        <SingleActivity
          date={calculateDate(item)}
          entry={item}
          key={index}
          item={item}
          details={singleEntry}
          OnPress={() => props.OnPress(item)}
        />
      )
    })
  return <>{renderList()}</>
}
