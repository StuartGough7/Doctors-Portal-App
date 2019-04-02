import { OrderedMap } from 'immutable'
import { createReducer } from 'reduxsauce'
import { EntryTypes } from './Actions'

const INITIAL_STATE = OrderedMap({})

export const createEntry = (
  state,
  { createdAt, date, category, notes, duration, learning, satisfaction, involvement }
) => {
  const currentCategory = state.get(category) || {}
  return state.set(category, {
    ...currentCategory,
    [createdAt]: {
      date,
      notes,
      duration,
      learning,
      satisfaction,
      involvement,
    },
  })
}

export const getAll = (state) => Array.from(state.entry.values())

// Reduxsauce Create Reducer
export default createReducer(INITIAL_STATE, {
  [EntryTypes.CREATE_ENTRY]: createEntry,
})
