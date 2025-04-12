import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "../ui/date-picker-with-range"
import { useState } from "react"
import { DateRange } from "react-day-picker"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCreateBookingMutation } from "@/services/booking-api"
import Toast from "@/lib/toast"
import { useAuth } from "@clerk/clerk-react"

interface BookingFormDialogProps {
    hotelId: string;
}

export function BookingFormDialog({ hotelId }: BookingFormDialogProps) {
    const { userId } = useAuth();
    const [createBooking, { isLoading }] = useCreateBookingMutation();
    const [date, setDate] = useState<DateRange | undefined>();
    const [formData, setFormData] = useState({
        name: "",
        noOfRooms: "",
        phone: "",
        rooms: "",
        adults: "",
        children: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!userId) {
            Toast.error("Please sign in to make a booking");
            return;
        }

        if (!date?.from || !date?.to) {
            Toast.error("Please select a date range");
            return;
        }

        if (!formData.name.trim() || !formData.noOfRooms.trim() || !formData.phone.trim()) {
            Toast.error("Please fill in all required fields");
            return;
        }

        try {
            await createBooking({
                hotelId,
                userId,
                customerName: formData.name,
                customerPhone: formData.phone,
                noOfRooms: parseInt(formData.noOfRooms),
                guests: {
                    adults: parseInt(formData.adults),
                    children: parseInt(formData.children)
                },
                checkIn: date.from,
                checkOut: date.to,
                bookingStatus: "pending"
            }).unwrap();
            
            Toast.success("Booking created successfully!");
            
        } catch (error) {
            Toast.error("Failed to create booking");
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Book Now</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Complete Your Booking</DialogTitle>
                    <DialogDescription>
                        Fill in your details to confirm your stay. Click 'Confirm Booking' when you're done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="Enter phone number"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="numberOfRooms">Rooms</Label>
                        <Input
                            id="numberOfRooms"
                            name="noOfRooms"
                            type="number"
                            value={formData.noOfRooms}
                            onChange={handleInputChange}
                            placeholder="Enter no of rooms"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Select Dates</Label>
                        <DatePickerWithRange date={date} setDate={setDate} className="w-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="adults">Adults</Label>
                            <Select
                                value={formData.adults}
                                onValueChange={(value) => setFormData(prev => ({ ...prev, adults: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select adults" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num} {num === 1 ? 'Adult' : 'Adults'}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="children">Children</Label>
                            <Select
                                value={formData.children}
                                onValueChange={(value) => setFormData(prev => ({ ...prev, children: value }))}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select children" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[0, 1, 2, 3, 4].map((num) => (
                                        <SelectItem key={num} value={num.toString()}>
                                            {num} {num === 1 ? 'Child' : 'Children'}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex justify-between items-center pt-4">
                        <Button type="submit" disabled={isLoading}>
                            {isLoading ? "Creating..." : "Confirm Booking"}
                        </Button>
                    </div>
                </form>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
