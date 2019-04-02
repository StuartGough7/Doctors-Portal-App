import { all, takeLatest } from 'redux-saga/effects'
import { StartupTypes } from 'app/stores/Startup/Actions'
import { EntryTypes } from 'app/stores/Entry/Actions'
import { startup } from './Startup/StartupSaga'
import { createEntry } from './Entry/EntrySaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(EntryTypes.REQUEST_CREATE_ENTRY, createEntry), // Run the profile saga when creating a new profile
  ])
}
