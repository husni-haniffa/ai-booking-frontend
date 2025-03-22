export interface IBooking {
    hotelId?: string;
    userId?: string;
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