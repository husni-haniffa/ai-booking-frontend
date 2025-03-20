export interface IHotel {
    id?: number;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    image: string;
    price: number;
    description: string;
}

export interface IHotelState {
    hotel: IHotel | null;
    hotels: IHotel[];
    loading: boolean;
    error: string | null;
}