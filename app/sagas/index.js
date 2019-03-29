import { all, takeLatest } from 'redux-saga/effects'
import { createProfile } from './Profile/ProfileSaga'
import { ProfileTypes } from 'app/stores/Profile/Actions'

export const rootSaga = function*() {
  yield all([
    takeLatest(ProfileTypes.REQUEST_CREATE_PROFILE, createProfile), // Run the profile saga when creating a new profile
  ])
}
