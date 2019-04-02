import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'app/sagas'
import entry from './Entry'

export default () => {
  const rootReducer = combineReducers({
    entry,
  })

  return configureStore(rootReducer, rootSaga)
}
