import { OrderedMap } from 'immutable'
import { createReducer } from 'reduxsauce'
import { EntryTypes } from './Actions'

const INITIAL_STATE = OrderedMap({})

export const createEntry = (
  state,
  { createdAt, title, date, category, notes, duration, learning, satisfaction, involvement }
) => {
  const currentCategory = state.get(category) || {}
  return state.set(category, {
    ...currentCategory,
    [createdAt]: {
      title,
      date,
      notes,
      duration,
      learning,
      satisfaction,
      involvement,
    },
  })
}

export const updateEntry = (
  state,
  { completedAt, title, date, category, notes, duration, learning, satisfaction, involvement }
) => {
  const currentCategory = state.get(category) || {}
  return state.set(category, {
    ...currentCategory,
    [completedAt]: {
      title,
      date,
      notes,
      duration,
      learning,
      satisfaction,
      involvement,
    },
  })
}

export const deleteEntry = (state, { category, completedAt }) => {
  return state.deleteIn([category, completedAt])
}

// =========== Selectors ===================================

export const getAllEntriesByCategory = (state, category) => {
  const ListedEntries = Array.from(Object.keys(state.entry.get(category) || {})) // selects all entries for specific Category
  return ListedEntries.reverse()
}

export const singleEntryDetailsByDateKey = (state, category, date) => {
  const singleEntry = state.entry.getIn([category, date])
  return singleEntry
}

// Reduxsauce Create Reducer
export default createReducer(INITIAL_STATE, {
  [EntryTypes.CREATE_ENTRY]: createEntry,
  [EntryTypes.UPDATE_ENTRY]: updateEntry,
  [EntryTypes.DELETE_ENTRY]: deleteEntry,
})
