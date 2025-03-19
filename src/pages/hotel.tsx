import heroBackground from "@/assets/hero-background.jpg";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookingForm } from "./booking-form";
import { Wifi, Tv, Utensils, Coffee, Star, MapPin } from "lucide-react";
import { Label } from "@/components/ui/label";


const hotels = [
  {
    id: 6,
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
    id: 1,
    hotel: "Hotel Name",
    image:
      "https://th.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?rs=1&pid=ImgDetMain",
    rating: "rating",
    location: "defe",
    price: "re",
  },
];

const Hotel: React.FC = () => {
    const {id} = useParams();
    const hotel = hotels.find((hotel) => hotel.id === parseInt(id!));
    if (!hotel) {
      return <div>Hotel not found</div>;
    }
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={heroBackground}
              alt=""
              className="rounded-3xl min-h-[300px]"
            />
          </div>
          <div className="space-y-2">
            {/* first component */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="mb-2">Hotel Name</CardTitle>
                <div className="space-y-2">
                  <div className="flex space-x-1 ">
                    <span>
                      <MapPin size={16} />
                    </span>
                    <Label>Tokyo, Japan</Label>
                  </div>

                  <div className="flex space-x-1">
                    <span>
                      <Star size={16} />
                    </span>
                    <Label>
                      <b>4.6</b>(100) reviws
                    </Label>
                  </div>
                </div>

                <CardDescription>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Rerum ut exercitationem autem odit. Porro voluptatum ut
                  perferendis quidem quis corporis, amet, repudiandae eius,
                  rerum illum eligendi veniam illo hic error!
                </CardDescription>
              </CardHeader>
            </Card>
            {/* second component */}
            <Card className="border-none shadow-md rounded-2xl">
              <CardHeader>
                <CardTitle>Amnities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 space-y-2">
                  <div className="flex space-x-1">
                    <Wifi size={16} />
                    <CardDescription>Free Wi-Fi</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Tv size={16} />
                    <CardDescription>TV</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Utensils size={16} />
                    <CardDescription>Dining</CardDescription>
                  </div>
                  <div className="flex space-x-1">
                    <Coffee size={16} />
                    <CardDescription>Beverages</CardDescription>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="block space-y-6">
                <div className="flex space-x-2">
                  <span>100 USD</span>
                  <Label>Per Night</Label>
                </div>

                <BookingForm />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    );
}

export default Hotel;