import { OrderedMap } from 'immutable'
import { createReducer } from 'reduxsauce'
import { ProfilesTypes } from './Actions'

const INITIAL_STATE = OrderedMap({})

export const getAll = (state) => Array.from(state.profiles.values())
export const getProfileById = (state, profileId) => state.profiles.get(profileId)

export const createProfile = (state, { id, name, IconNum, dateOfBirth, createdAt }) =>
  state.set(id, { id, name, IconNum, dateOfBirth, createdAt })

export const deleteProfile = (state, { id }) => {
  return state.filter((item) => item.id !== id)
}
// Reduxsauce Create Reducer
export default createReducer(INITIAL_STATE, {
  [ProfilesTypes.CREATE_PROFILE]: createProfile,
  [ProfilesTypes.DELETE_PROFILE]: deleteProfile,
})
