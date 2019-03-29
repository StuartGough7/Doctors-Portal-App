import { createActions } from 'reduxsauce'

const signals = {
  requestCreateProfile: ['name', 'IconNum', 'dateOfBirth'],
  requestDeleteProfile: ['id'],
  requestProfileInfo: ['id'],
  requestReport: ['id', 'completedAt'],
}

const { Types, Creators } = createActions({
  createProfile: ['id', 'name', 'IconNum', 'dateOfBirth', 'createdAt'], // Create a new profile with the data provided
  deleteProfile: ['id'], // delete profile with the id provided
  ...signals, // Spread all the signals here
})

export const ProfilesTypes = Types
export default Creators
