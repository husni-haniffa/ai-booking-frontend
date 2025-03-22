import { IBooking, IBookingState} from "@/types/booking";
import { useAuth } from "@clerk/clerk-react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IBookingState = {
    booking: null,
    bookings: [],
    loading: false,
    error: null,
};

export const createBooking = createAsyncThunk(
    "booking/createBooking",
    async ({ booking, token }: { booking: IBooking; token: string }) => {
        console.log("🚀 Creating booking with data:", booking);

        if (!token) {
            throw new Error("❌ No authentication token found");
        }

        const response = await fetch("http://localhost:3000/api/bookings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(booking),
        });

        if (!response.ok) {
            throw new Error("⚠️ Failed to create booking");
        }

        return await response.json();
    }
);


const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setBooking: (state, action) => {
            state.booking = action.payload;
        },
        setBookings: (state, action) => {
            state.bookings = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => { 
        builder
            .addCase(createBooking.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings.push(action.payload); // Add the new booking to the state
                state.loading = false;
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
     
    },
});

export const { setBooking, setBookings, setLoading, setError } = bookingSlice.actions;
export default bookingSlice.reducer;