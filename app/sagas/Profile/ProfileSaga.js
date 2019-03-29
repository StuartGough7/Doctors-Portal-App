import { put, call } from 'redux-saga/effects'
import ProfileActions from 'app/stores/Profile/Actions'
// import { generateRandomId } from 'app/services/Utils'

export function* createProfile({
  date,
  category,
  Notes,
  duration,
  learning,
  satisfaction,
  involvement,
}) {
  // const nextProfileId = yield call(generateRandomId)
  const createdAt = yield call(Date.now)
  yield put(
    ProfileActions.createProfile(
      createdAt,
      date,
      category,
      Notes,
      duration,
      learning,
      satisfaction,
      involvement
    )
  ) // Create a new profile
}
