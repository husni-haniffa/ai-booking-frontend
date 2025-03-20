import HotelCard from "@/components/shared/hotel-card";
import Marketing from "./marketing";
import { Label } from "@radix-ui/react-label";
import { fetchHotels } from "@/lib/features/hotelSlice";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



 

const Home: React.FC = () => {
  
  const dispatch = useDispatch();
    const { hotels, loading, error } = useSelector((state: { hotel: { hotels: any[]; loading: boolean; error: string | null; } }) => state.hotel);

    useEffect(() => {
        dispatch<any>(fetchHotels());
    }, [dispatch]);

    if (loading) return <p>Loading hotels...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-4xl">Top trending hotels worldwide</Label><br/>
        <Label className="mt-4">Discover the most luxuries hotels worldwide for an unforgettable experience</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          console.log(hotel.id),
          <HotelCard
            key={hotel._id}
            id={hotel._id}
            hotelName={hotel.hotel}
            image={hotel.image}
            rating={hotel.rating}
            location={hotel.location}
            price={hotel.price}
          />
        ))}
      </div>
      <div>
        <Marketing />
      </div>
    </div>
  );
};

export default Home;
