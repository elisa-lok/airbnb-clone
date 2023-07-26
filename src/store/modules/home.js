import { getHomeGoodPriceData } from '@/services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHomeDataAction = createAsyncThunk("fetchdata", () => {
  getHomeGoodPriceData().then(res => {
    console.log(res);
  })
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {

    }
  },

  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
  },

  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, { payload }) {
      console.log(payload);
      state.goodPriceInfo = payload;
    }
  }
}
});

export const { changeGoodPriceInfoAction } = homeSlice.actions;

export default homeSlice.reducer;