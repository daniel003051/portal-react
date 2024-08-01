import { configureStore } from '@reduxjs/toolkit'
import unsettledList from './slice/unsettledList'

const store = configureStore({
  reducer: {
    unsettledList: unsettledList,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
