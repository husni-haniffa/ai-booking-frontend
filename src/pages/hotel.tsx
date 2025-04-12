import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Wifi, Tv, Coffee, Star, MapPin, Utensils } from "lucide-react";
import { useGetHotelByIdQuery } from "@/services/hotel-api";

import { BookingFormDialog } from "@/components/ui-components/booking-form";






const Hotel: React.FC = () => { 

const { _id } = useParams();

const {data: hotel, isLoading, isError, error } = useGetHotelByIdQuery(_id!);

        if (isLoading) {
        return (
            <p>Loading</p>
        )
        
    }

    if (isError) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                <p className="text-red-500">
                    {error && 'data' in error 
                        ? (error.data as string) 
                        : 'error' in error 
                        ? error.error 
                        : "An error occurred"}
                </p>
            </div>
        )
    }
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="relative w-full h-[400px]">
            <img
              src={hotel?.image}
              alt={hotel?.name}
              className="absolute object-cover rounded-lg"
            />
          </div>
          <div className="flex space-x-2">
            <span className="badge-secondary">Rooftop View</span>
            <span className="badge-secondary">French Cuisine</span>
            <span className="badge-secondary">City Center</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{hotel?.name}</h1>
              <div className="flex items-center mt-2">
                <MapPin className="h-5 w-5 text-muted-foreground mr-1" />
                <p className="text-muted-foreground">{hotel?.location}</p>
              </div>
            </div>
            <button className="btn-outline btn-icon">
              <Star className="h-4 w-4" />
              <span className="sr-only">Add to favorites</span>
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-5 w-5 fill-primary text-primary" />
            <span className="font-bold">{hotel?.rating}</span>
            <span className="text-muted-foreground">
              ({hotel?.reviews?.toLocaleString() ?? 0} reviews)
            </span>
          </div>
          <p className="text-muted-foreground">{hotel?.description}</p>
          <Card>
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 mr-2" />
                  <span>Free Wi-Fi</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 mr-2" />
                  <span>Restaurant</span>
                </div>
                <div className="flex items-center">
                  <Tv className="h-5 w-5 mr-2" />
                  <span>Flat-screen TV</span>
                </div>
                <div className="flex items-center">
                  <Coffee className="h-5 w-5 mr-2" />
                  <span>Coffee maker</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold">${hotel?.price}</p>
              <p className="text-sm text-muted-foreground">per night</p>
            </div>
            <BookingFormDialog hotelId={String(hotel?._id)} />
          </div>
        </div>
      </div>
    </div>
    );
}

export default Hotel;
