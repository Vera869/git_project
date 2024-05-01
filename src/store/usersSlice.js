import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    username: "",
    totalCount: 1,
    perPage: 1,
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
    setTotalCount(state, action) {
      state.totalCount = action.payload
    },
    setPerPage(state, action) {
      state.perPage = action.payload
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
export const { setUsers, setUsername, setTotalCount, setPerPage, setPage, setOrder, setIsLoading, setIsShowSort, setIsShowUsersNum } = usersSlice.actions;