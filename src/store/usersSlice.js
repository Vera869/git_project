import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    userRepo: [],
    username: "",
    isLoading: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload
    },
    setUsername(state, action) {
      state.username = action.payload
    },
    setUserRepo(state, action) {
      state.userRepo = action.payload
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
  
})
export const usersReducer = usersSlice.reducer
export const { setUsers, setUsername, setIsLoading} = usersSlice.actions;