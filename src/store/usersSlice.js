import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    userRepo: [],
    username: "",
    isLoaded: false,
  },
  reducers: {
    setUsers(state, action) {
      state.users = action.payload.users
    },
    setUsername(state, action) {
      state.username = action.payload
    },
    setUserRepo(state, action) {
      state.userRepo = action.payload
    },
    setIsLoaded(state) {
      state.isLoaded = !state.isLoaded
    },
  },
  
})
export const usersReducer = usersSlice.reducer
export const { setUsers, setUsername, setIsLoaded} = usersSlice.actions;