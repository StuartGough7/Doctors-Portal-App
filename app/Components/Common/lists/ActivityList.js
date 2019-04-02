import React from 'react'
import { SingleActivity } from 'app/components/common'

export const ActivityList = (props) => {
  const renderList = () =>
    props.Entries.map((item, index) => {
      return (
        <SingleActivity
          date={'29 Jan 2019'}
          entry={item}
          key={index}
          item={item}
          OnPress={() => props.OnPress(item)}
        />
      )
    })
  return <>{renderList()}</>
}
