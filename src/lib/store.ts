import { configureStore } from "@reduxjs/toolkit";

import { hotelAPI } from "@/services/hotel-api";
import { bookingAPI } from "@/services/booking-api";

const store = configureStore({
    reducer: {
        [hotelAPI.reducerPath]: hotelAPI.reducer,
        [bookingAPI.reducerPath]: bookingAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(hotelAPI.middleware, bookingAPI.middleware),
   
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;