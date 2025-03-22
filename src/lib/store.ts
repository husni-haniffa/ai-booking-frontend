import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "@/lib/features/hotelSlice";
import bookingReducer from "@/lib/features/bookingSlice";

const store = configureStore({
    reducer: {
        hotel: hotelReducer,
        booking: bookingReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;