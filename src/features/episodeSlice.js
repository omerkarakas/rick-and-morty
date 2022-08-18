import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  episodes: [],
};
const episodeSlice = createSlice({
  name: 'eps',
  initialState,
  reducers: {},
});

export const { showEpisode } = modalSlice.actions;
export default episodeSlice.reducer;
