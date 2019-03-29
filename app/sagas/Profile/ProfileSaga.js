import { put, call } from 'redux-saga/effects'
import ProfilesActions from 'app/stores/Profile/Actions'
import { generateRandomId } from 'app/services/Utils'

export function* createProfile({ name, IconNum, dateOfBirth }) {
  const nextProfileId = yield call(generateRandomId)
  const createdAt = yield call(Date.now)
  yield put(ProfilesActions.createProfile(nextProfileId, name, IconNum, dateOfBirth, createdAt)) // Create a new profile
}
