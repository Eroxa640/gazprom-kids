import {configureStore} from '@reduxjs/toolkit'
import eventReducer from './reducers/event.reducer'

export const store = configureStore({
  reducer: {
    events: eventReducer,
  }
})