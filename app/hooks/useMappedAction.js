import { useCallback } from 'react'
import { mapValues } from 'lodash'
import { useDispatch } from 'redux-react-hook'

export function useMappedAction(actionsObj) {
  const dispatch = useDispatch()

  return mapValues(actionsObj, (value) =>
    useCallback((...actionPayload) => dispatch(value(...actionPayload)), [])
  )
}
