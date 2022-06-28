import {createSlice} from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../api/axios'

export const eventFetch = createAsyncThunk(
  'event/get',
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get("/events?populate=image");
      if(!res.data) {
        throw new Error()
      }
      return res.data
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

const EventSlice = createSlice({
  name: 'event',
  initialState: {
    loading: '',
    event: [],
  },
  extraReducers: {
    [eventFetch.pending]: (state) => {                     
      state.loading = 'loading'
    },
    [eventFetch.fulfilled]: (state, action) => {
      state.event = [
        ...action.payload.data
      ]
      state.loading = 'complete'
    },
    [eventFetch.rejected]: (state) => {
      state.loading = 'error'
    }
  }
})

export default EventSlice.reducer