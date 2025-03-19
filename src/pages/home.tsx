import HotelCard from "@/components/shared/hotel-card";
import Marketing from "./marketing";
import { Label } from "@radix-ui/react-label";

const hotels = [
  {
    id: 1,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
  {
    id: 3,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
  {
    id: 2,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
  {
    id: 4,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
  {
    id: 6,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <Label className="text-4xl">Top trending hotels worldwide</Label><br/>
        <Label className="mt-4">Discover the most luxuries hotels worldwide for an unforgettable experience</Label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            id={hotel.id}
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
