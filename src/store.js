import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from './features/episodeSlice';

export const store = configureStore({
  reducer: {
    eps: episodeReducer,
  },
});
