import { put, call } from 'redux-saga/effects'
import EntryActions from 'app/stores/Entry/Actions'
// import { generateRandomId } from 'app/services/Utils'

export function* createEntry({
  category,
  date,
  notes,
  duration,
  learning,
  satisfaction,
  involvement,
}) {
  // const nextProfileId = yield call(generateRandomId)
  const createdAt = yield call(Date.now)
  yield put(
    EntryActions.createEntry(
      category,
      createdAt,
      date,
      notes,
      duration,
      learning,
      satisfaction,
      involvement
    )
  ) // Create a new entry
}
