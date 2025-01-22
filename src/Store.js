import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './slices/tasksSlice';
import listsReducer from './slices/taskListSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    lists: listsReducer,
  },
});