import { createSlice } from "@reduxjs/toolkit";


const initialState: UserState = {
  user: null,
};

interface User {
    id?: number;
    name: string;
    email: string;
}

interface UserState {
    user: User | null;
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },  
    }
});

export default userSlice.reducer;