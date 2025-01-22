import { createSlice } from '@reduxjs/toolkit';

const taskListSlice = createSlice({
  name: 'lists',
  initialState: [],
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
    deleteList: (state, action) => {
      return state.filter((list) => list.id !== action.payload);
    },
  },
});

export const { addList, deleteList } = taskListSlice.actions;
export default taskListSlice.reducer;
