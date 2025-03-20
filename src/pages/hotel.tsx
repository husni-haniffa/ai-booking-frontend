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
import { fetchHotel } from "@/lib/features/hotelSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";




const Hotel: React.FC = () => {
   const dispatch = useDispatch();
const { hotel: selectedHotel, loading, error } = useSelector(
    (state: { hotel: { hotel: any; loading: boolean; error: string | null; } }) => state.hotel
);
const { _id } = useParams();

useEffect(() => {
    if (_id) {
        dispatch<any>(fetchHotel(_id));
    }
}, [dispatch, _id]);

if (loading) return <p>Loading hotel...</p>;
if (error) return <p>Error: {error}</p>;
if (!selectedHotel) return <div>Hotel not found</div>;
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={selectedHotel.image}
              alt=""
              className="rounded-3xl min-h-[300px]"
            />
          </div>
          <div className="space-y-2">
            {/* first component */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="mb-2">{selectedHotel.name}</CardTitle>
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