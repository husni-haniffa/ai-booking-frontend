import { IBooking } from "@/types/booking";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const server = "https://aidf-le-luxe-backend-husni.onrender.com";

export const bookingAPI = createApi({
    reducerPath: "bookingApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${server}/api/`,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('__clerk_client_jwt');
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getBookings: builder.query<IBooking[], void>({
            query: () => "bookings",
        }),
        createBooking: builder.mutation<IBooking, Partial<IBooking>>({
            query: (booking) => ({
                url: "bookings",
                method: "POST",
                body: booking,
            }),
        }),
    }),
});

export const { useGetBookingsQuery, useCreateBookingMutation } = bookingAPI;