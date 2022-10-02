import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './Redux/skillsSlices';

export const store = configureStore({
  reducer: skillsReducer
})