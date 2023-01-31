import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './modules/home'

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

export default store
