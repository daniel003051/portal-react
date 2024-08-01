import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { UnsettledItem } from '../../type'
import { getUnsettledItems } from '../../api'

type SliceState = {
  unsettledList: UnsettledItem[]
  fetched: boolean
}

const initialState: SliceState = {
  unsettledList: [],
  fetched: false,
}

// 定義異步 thunk
export const fetchUnsettledList = createAsyncThunk(
  'unsettledList/fetchUnsettledList',
  async () => {
    const response = await getUnsettledItems({ includeGuestInfo: true })
    const { assignedAppList } = response.data.result
    return assignedAppList
  },
)

export const unsettledListSlice = createSlice({
  name: 'unsettledList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUnsettledList.fulfilled, (state, action) => {
        if (state.fetched) return
        state.unsettledList = action.payload
        state.fetched = true
      })
      .addCase(fetchUnsettledList.rejected, (state) => {
        console.log(state)
      })
  },
})

export const selectList = (state: { unsettledList: SliceState }) =>
  state.unsettledList
export default unsettledListSlice.reducer
