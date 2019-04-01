import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistReducer, persistStore } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { composeWithDevTools } from 'remote-redux-devtools'

import storage from 'redux-persist/lib/storage' // Non secure storage:  For secure storage: @see https://github.com/CodingZeal/redux-persist-sensitive-storage

const persistConfig = {
  transforms: [
    immutableTransform(), // This is necessary to support immutable reducers. * @see https://github.com/rt2zz/redux-persist-transform-immutable
  ],
  key: 'root',
  storage: storage,
  blacklist: ['assessment', 'ui'], // Blacklists state that we do not want to persist
}

export default (rootReducer, rootSaga) => {
  const middleware = []
  const enhancers = []
  const sagaMiddleware = createSagaMiddleware() // Connect the sagas to the redux store
  middleware.push(sagaMiddleware)
  enhancers.push(composeWithDevTools(applyMiddleware(...middleware))) // ==+==+=+=+==++ Change composeWithDevTools to composeEnhancers when at home

  const persistedReducer = persistReducer(persistConfig, rootReducer) // Redux persist

  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga) // Kick off the root saga

  return { store, persistor }
}
