import { z } from "zod";

export interface IBooking {
    hotelId: string;
    userId: string;
    customerName: string;
    customerPhone: string;
    guests: {
        adults: number;
        children: number;
    };
    checkIn: Date;
    checkOut: Date;
    bookingStatus?: string;

}

export interface IBookingState {
    booking: IBooking | null;
    bookings: IBooking[];
    loading: boolean;
    error: string | null;
}

export const bookingSchema = z.object({
    hotelId: z.string(),
    userId: z.string(),
    customerName: z.string().min(1, "Name is required."),
    customerPhone: z.string().min(10, "Phone number is required."),
    noOfRooms: z.coerce.number().min(1, "Number of rooms must be at least 1."),
    guests: z.object({
        adults: z.number().min(1, "At least 1 adult is required."),
        children: z.number().min(0, "Children can be 0 or more."),
    }),
    checkIn: z.date({ required_error: "Check-in date is required." }),
    checkOut: z.date({ required_error: "Check-out date is required." })}).
        refine(data => data.checkOut > data.checkIn, {
        message: "Check-out date must be after check-in date.",
        path: ["checkOut"],
});

