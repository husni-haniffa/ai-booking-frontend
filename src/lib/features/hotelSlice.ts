
import { IHotel, IHotelState } from "@/types/hotel";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: IHotelState = {
    hotel: null,
    hotels: [],
    loading: false,
    error: null,
};

export const fetchHotels = createAsyncThunk("hotel/fetchHotels", async () => {
    const response = await fetch("http://localhost:3000/api/hotels");
    if (!response.ok) throw new Error("Failed to fetch hotels");
    return await response.json();
});

export const fetchHotel = createAsyncThunk("hotel/fetchHotel", async (id: string) => {
    const response = await fetch(`http://localhost:3000/api/hotels/${id}`);
    if (!response.ok) throw new Error("Failed to fetch hotel");
    return await response.json();
});

export const createHotel = createAsyncThunk(
    "hotel/createHotel",
    async (hotelData: IHotel, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3000/api/hotels", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(hotelData),
            });
            if (!response.ok) throw new Error("Failed to create hotel");
            return await response.json();
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);




const hotelSlice = createSlice({
    name: "hotel",
    initialState,
    reducers: {
        setHotel: (state, action) => {
            state.hotel = action.payload;
        },
        setHotels: (state, action) => {
            state.hotels = action.payload;
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
            .addCase(fetchHotels.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHotels.fulfilled, (state, action) => {
                state.hotels = action.payload;
                state.loading = false;
            })
            .addCase(fetchHotels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            })
            .addCase(fetchHotel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHotel.fulfilled, (state, action) => {
                state.hotel = action.payload;
                state.loading = false;
            })
            .addCase(fetchHotel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
        builder
            .addCase(createHotel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createHotel.fulfilled, (state, action) => {
                state.hotels.push(action.payload); // Add the new hotel to the state
                state.loading = false;
            })
            .addCase(createHotel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setHotel, setHotels, setLoading, setError } = hotelSlice.actions;
export default hotelSlice.reducer;