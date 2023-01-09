import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Database from "../../classes/database";
import User from "../../classes/user";

interface UserState {
    userData: User | undefined | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    userData: new User('', '', '', ''),
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser(state, action: PayloadAction<User[]>) {

        },
        saveUser(state, action: PayloadAction<User>) {

        },
        deleteUser(state, action: PayloadAction<User>) {

        }
    }, extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            // state.userData = action.payload || undefined
        })
        builder.addCase(fetchUser.rejected, (state, action) => {

        })
    }
})

export const fetchUser = createAsyncThunk(
    'user/fetchUserData',
    async (user: User, thunkApi) => {
        const database = new Database<User>
        let response = database.get(user.id)

        console.log(response);


        return response
    }
)

export const { getUser, saveUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
