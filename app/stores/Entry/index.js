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

export const getAllEntriesByCategory = (state, category) => {
  const ListedEntries = Array.from(Object.keys(state.entry.get(category) || {})) // selects all entries for specific Category
  return ListedEntries.reverse()
}

// Reduxsauce Create Reducer
export default createReducer(INITIAL_STATE, {
  [EntryTypes.CREATE_ENTRY]: createEntry,
})
