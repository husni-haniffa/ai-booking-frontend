import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { useGetHotelsQuery } from "@/services/hotel-api";

const dummyHotels = [
  {
    _id: "1",
    name: "Grand Hotel",
    location: "New York",
    price: 299,
    rating: 4.5,
    image: "https://example.com/hotel1.jpg"
  }
]

export function HotelTable() {
  const { data: hotels, isLoading, isError, error } = useGetHotelsQuery();

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hotels?.map((hotel) => (
            <TableRow key={hotel._id}>
              <TableCell className="font-medium">{hotel.name}</TableCell>
              <TableCell>{hotel.location}</TableCell>
              <TableCell>${hotel.price}</TableCell>
              <TableCell>{hotel.rating}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 