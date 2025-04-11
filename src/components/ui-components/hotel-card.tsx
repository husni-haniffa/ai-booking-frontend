import { IHotel } from "@/types/hotel";
import { MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HotelCard: React.FC<{ hotel: IHotel }> = ({ hotel }) => {
    return (
        <Link to={`/hotels/${hotel._id}`} key={hotel._id} className="block group">
            {/* Image container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="object-cover w-full h-full absolute transition-transform group-hover:scale-105"
                />
            </div>
            
            {/* Details container - MOVED OUTSIDE the image container */}
            <div className="mt-3 space-y-2">
                <h3 className="font-semibold text-lg">{hotel.name}</h3>
                <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{hotel.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{hotel.rating}</span>
                    <span className="text-muted-foreground">
                        ({hotel.reviews?.toLocaleString()} Reviews)
                    </span>
                </div>
                <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-bold">${hotel.price}</span>
                </div>
            </div>
        </Link>
    );
};


export default HotelCard;