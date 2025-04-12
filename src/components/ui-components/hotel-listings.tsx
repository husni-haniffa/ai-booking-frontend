import { useGetHotelsQuery } from "@/services/hotel-api";
import HotelCard from "./hotel-card";
import { useState } from "react";
import { IHotel } from "@/types/hotel";
import { Loader2 } from "lucide-react";

interface HotelListingsProps {
  searchResults?: Array<{ hotel: IHotel; confidence: number }>;
  onClearSearch?: () => void;
}

const HotelListings: React.FC<HotelListingsProps> = ({ searchResults, onClearSearch }) => {
  const { data: hotels = [], isLoading, error } = useGetHotelsQuery();
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  // Get unique locations from hotels
  const locations = Array.from(
    new Set(
      hotels.map(hotel => {
        const parts = hotel?.location?.split(',');
        return parts && parts.length > 1 ? parts[1].trim() : '';
      }).filter(Boolean)
    )
  );

  // Handle location filtering
  const getFilteredHotels = (hotelsToFilter: IHotel[]) => {
    if (!selectedLocation) return hotelsToFilter;
    return hotelsToFilter.filter(hotel => {
      const locationParts = hotel?.location?.split(',');
      return locationParts && locationParts.length > 1 
        ? locationParts[1].trim().toLowerCase().includes(selectedLocation.toLowerCase())
        : false;
    });
  };

  // If there are search results, use those. Otherwise, use all hotels
  const hotelsToDisplay = searchResults 
    ? searchResults.map(result => result.hotel)
    : hotels;

  // Apply location filtering to the selected hotels
  const filteredHotels = getFilteredHotels(hotelsToDisplay);

  const handleLocationClick = (location: string) => {
    setSelectedLocation(location);
    if (location === "" && onClearSearch) {
      onClearSearch();
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
        <p className="mt-4 text-gray-600">Loading hotels...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
        <div className="text-red-500 text-center">
          <p className="text-lg font-semibold">Error loading hotels</p>
          <p className="text-sm mt-2">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Filter by Location</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleLocationClick("")}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedLocation === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {locations.map((location, index) => (
            <button
              key={index}
              onClick={() => handleLocationClick(location)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedLocation === location
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel._id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelListings;