import ExploreContent from "../components/ui-components/explore-content";
import HotelListings from "@/components/ui-components/hotel-listings";
import HeroSection from "@/components/ui-components/hero-section";
import { useLocation } from "react-router-dom";
import { IHotel } from "@/types/hotel";
import { useState, useEffect } from "react";

const Home: React.FC = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<Array<{ hotel: IHotel; confidence: number }> | undefined>();

  useEffect(() => {
    if (location.state?.searchResults) {
      setSearchResults(location.state.searchResults);
    }
  }, [location.state]);

  const handleClearSearch = () => {
    setSearchResults(undefined);
  };

  return (
    <div>
      <div>
        <HeroSection />
        <HotelListings 
          searchResults={searchResults}
          onClearSearch={handleClearSearch}
        />
      </div>
      <div>
        <ExploreContent />
      </div>
    </div>
  );
};

export default Home;
