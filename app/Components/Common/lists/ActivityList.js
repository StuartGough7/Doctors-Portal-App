import React from 'react'
import { SingleActivity } from 'app/components/common'
import { calculateDate } from 'app/services/Utils'

export const ActivityList = (props) => {
  const renderList = () =>
    props.Entries.map((item, index) => {
      return (
        <SingleActivity
          date={calculateDate(item)}
          entry={item}
          key={index}
          item={item}
          OnPress={() => props.OnPress(item)}
        />
      )
    })
  return <>{renderList()}</>
}
