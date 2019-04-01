import { all, takeLatest } from 'redux-saga/effects'
import { StartupTypes } from 'app/stores/Startup/Actions'
import { ProfileTypes } from 'app/stores/Profile/Actions'
import { startup } from './Startup/StartupSaga'
import { createProfile } from './Profile/ProfileSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(ProfileTypes.REQUEST_CREATE_PROFILE, createProfile), // Run the profile saga when creating a new profile
  ])
}
