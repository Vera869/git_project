import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    username: "",
    per_page: 6,
    page: 1,
    order: "desc",
    isShowSort: false,
    isShowUsersNum: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setUsername(state, action) {
      state.username = action.payload
    },
    setPer_page(state, action) {
      state.per_page = action.payload
    },
    setPage(state, action) {
      state.page = action.payload
    },
    setOrder(state, action) {
      state.order = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setIsShowSort(state) {
      state.isShowSort = !state.isShowSort
    },setIsShowUsersNum(state) {
      state.isShowUsersNum = !state.isShowUsersNum
    },
  },
  
})
export const usersReducer = usersSlice.reducer
export const { setUsers, setUsername, setPer_page, setPage, setOrder, setIsLoading, setIsShowSort, setIsShowUsersNum } = usersSlice.actions;