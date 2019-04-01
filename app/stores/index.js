import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'app/sagas'
import profile from './Profile'

export default () => {
  const rootReducer = combineReducers({
    profile,
  })

  return configureStore(rootReducer, rootSaga)
}
