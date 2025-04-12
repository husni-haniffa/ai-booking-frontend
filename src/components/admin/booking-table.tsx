import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"
import { Eye } from "lucide-react"
import { useGetBookingsQuery } from "@/services/booking-api"
import { IBooking } from "@/types/booking"

export function BookingTable() {
  const { data: bookings, isLoading, isError } = useGetBookingsQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading bookings</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer Name</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Guests</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Check Out</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookings?.map((booking: IBooking) => (
            <TableRow key={booking._id}>
              <TableCell className="font-medium">{booking.customerName}</TableCell>
              <TableCell>{booking.customerPhone}</TableCell>
              <TableCell>
                {booking.guests.adults} Adults, {booking.guests.children} Children
              </TableCell>
              <TableCell>{format(new Date(booking.checkIn), "MMM dd, yyyy")}</TableCell>
              <TableCell>{format(new Date(booking.checkOut), "MMM dd, yyyy")}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  booking.bookingStatus === "confirmed" ? "bg-green-100 text-green-800" :
                  booking.bookingStatus === "pending" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {booking.bookingStatus || "pending"}
                </span>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
} 