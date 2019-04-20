import { createActions } from 'reduxsauce'

const signals = {
  requestCreateEntry: [
    'category',
    'title',
    'date',
    'notes',
    'duration',
    'learning',
    'satisfaction',
    'involvement',
  ],
}

const { Types, Creators } = createActions({
  createEntry: [
    'category',
    'createdAt',
    'title',
    'date',
    'notes',
    'duration',
    'learning',
    'satisfaction',
    'involvement',
  ], // Create a new profile with the data provided
  ...signals, // Spread all the signals here
})

export const EntryTypes = Types
export default Creators
