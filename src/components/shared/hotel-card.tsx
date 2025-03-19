import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DollarSign, MapPin, Star } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { Link } from "react-router-dom";

interface HotelCardProps {
  id: number;
  hotelName: string;
  image: string;
  rating: string;
  location: string;
  price: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  hotelName,
  image,
  rating,
  location,
  price,
}) => {
  return (
    <Link to={`/${id}`}>
      <Card className="w-full rounded-3xl border-none shadow-md">
        <img src={image} alt="" className="w-full rounded-lg" />
        <CardTitle className="text-start p-4">{hotelName}</CardTitle>
        <CardFooter className="flex justify-between p-3">
          <div className="space-y-2">
            <div className="flex space-x-2">
              <MapPin size={16} />
              <Label>{location}</Label>
            </div>
            <div className="flex space-x-2">
              <Star size={16} />
              <Label>
                <span className="font-semibold mr-2">4.6</span>(234 {rating})
              </Label>
            </div>
            <div className="flex space-x-2">
              <DollarSign size={16} />
              <Label>{price}</Label>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default HotelCard;
