import { OrderedMap } from 'immutable'
import { createReducer } from 'reduxsauce'
import { ProfileTypes } from './Actions'

const INITIAL_STATE = OrderedMap({})

export const createProfile = (
  state,
  { createdAt, date, category, Notes, duration, learning, satisfaction, involvement }
) =>
  state.set(createdAt, {
    createdAt,
    date,
    category,
    Notes,
    duration,
    learning,
    satisfaction,
    involvement,
  })

export const getAll = (state) => Array.from(state.profile.values())

// Reduxsauce Create Reducer
export default createReducer(INITIAL_STATE, {
  [ProfileTypes.CREATE_PROFILE]: createProfile,
})
