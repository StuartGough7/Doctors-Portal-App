import { createActions } from 'reduxsauce'

const signals = {
  requestCreateProfile: [
    'Date',
    'category',
    'Notes',
    'Duration',
    'Learning',
    'Satisfaction',
    'Involvement',
  ],
}

const { Types, Creators } = createActions({
  createProfile: [
    'createdAt',
    'Date',
    'category',
    'Notes',
    'Duration',
    'Learning',
    'Satisfaction',
    'Involvement',
  ], // Create a new profile with the data provided
  ...signals, // Spread all the signals here
})

export const ProfileTypes = Types
export default Creators
