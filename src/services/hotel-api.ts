import { IHotel } from "@/types/hotel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const server = "https://ai-booking-backend.vercel.app.com";

export const hotelAPI = createApi({
    reducerPath: "hotelApi",
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
        getHotels: builder.query<IHotel[], void>({
            query: () => "hotels",
        }),
        getHotelById: builder.query<IHotel, string>({
            query: (id) => `hotels/${id}`,
        }),
        createHotel: builder.mutation<IHotel, Partial<IHotel>>({
            query: (hotel) => ({
                url: "hotels",
                method: "POST",
                body: hotel,
            }),
        }),
        searchHotels: builder.mutation<IHotel[], { searchQuery: string }>({
            query: (body) => ({
                url: "hotels/search",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useGetHotelsQuery, useGetHotelByIdQuery, useCreateHotelMutation, useSearchHotelsMutation } = hotelAPI;