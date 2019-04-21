import { put, call } from 'redux-saga/effects'
import EntryActions from 'app/stores/Entry/Actions'
// import { generateRandomId } from 'app/services/Utils'

export function* createEntry({
  category,
  title,
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
      title,
      date,
      notes,
      duration,
      learning,
      satisfaction,
      involvement
    )
  ) // Create a new entry
}

export function* deleteEntry({ category, completedAt }) {
  yield put(EntryActions.deleteEntry(category, completedAt))
}
