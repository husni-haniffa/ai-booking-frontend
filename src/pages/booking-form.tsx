"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format, addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/utils/roles";
import { useParams } from "react-router-dom";
import { AppDispatch } from "@/lib/store";
import { useDispatch } from "react-redux";
import { createBooking } from "@/lib/features/bookingSlice";
import Toast from "@/lib/toast";
import { useAuth } from "@clerk/clerk-react";

// Zod schema validation for booking form
const bookingSchema = z.object({

  hotelId: z.string(),
  userId: z.string(),
  customerName: z.string().min(1, "Name is required."),
  customerPhone: z.string().min(10, "Phone number is required."),
  noOfRooms: z.coerce.number().min(1, "Number of rooms must be at least 1."),
  guests: z.object({
    adults: z.number().min(1, "At least 1 adult is required."),
    children: z.number().min(0, "Children can be 0 or more."),
  }),
  checkIn: z.date({
    required_error: "Check-in date is required.",
  }),
  checkOut: z.date({
    required_error: "Check-out date is required.",
  }),
}).refine(data => data.checkOut > data.checkIn, {
  message: "Check-out date must be after check-in date",
  path: ["checkOut"]
});

export function BookingForm() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [open, setOpen] = useState(false);
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const {_id } = useParams();

  
const user = useCurrentUser();

if (!user) {
  return <p>Loading user data...</p>;
}

console.log("🧑‍💻 User Data:", user);
console.log("🆔 User ID:", user?.id);
  const today = new Date();
  const tomorrow = addDays(today, 1);

  // Initialize React Hook Form with zod schema validation
  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      hotelId: _id,
      userId: user.id,
      customerName: "",
      customerPhone: "",
      noOfRooms: 1,
      guests: {
        adults: 1,
        children: 0,
      },
      checkIn: today,
      checkOut: tomorrow,
    },
  });

  const handleIncrement = (type: "adults" | "children") => {
    if (type === "adults") {
      setAdults((prev) => Math.min(prev + 1, 10));
      form.setValue("guests.adults", Math.min(adults + 1, 10));
    } else {
      setChildren((prev) => Math.min(prev + 1, 10));
      form.setValue("guests.children", Math.min(children + 1, 10));
    }
  };

  const handleDecrement = (type: "adults" | "children") => {
    if (type === "adults") {
      setAdults((prev) => Math.max(prev - 1, 1));
      form.setValue("guests.adults", Math.max(adults - 1, 1));
    } else {
      setChildren((prev) => Math.max(prev - 1, 0));
      form.setValue("guests.children", Math.max(children - 1, 0));
    }
  };

  // Watch for check-in date changes to update minimum check-out date
  const checkInDate = form.watch("checkIn");
  const dispatch = useDispatch<AppDispatch>();
  // Update check-out date when check-in changes to ensure it's valid
  useEffect(() => {
    const checkOutDate = form.getValues("checkOut");
    // If check-out is before or equal to check-in, set it to the day after check-in
    if (checkOutDate <= checkInDate) {
      form.setValue("checkOut", addDays(checkInDate, 1));
    }
  }, [checkInDate, form]);

const onSubmit = async (values: z.infer<typeof bookingSchema>) => {
  console.log("🚀 Creating booking with data:", values);
  try {
    if (!values.hotelId || !values.userId) {
      throw new Error("Hotel ID or User ID is required");
    }
    
    // Get the token here in the component
    const { getToken } = useAuth(); // Get the token from useAuth hook
    const token = await getToken();
    
    if (!token) {
      throw new Error("Authentication token is required");
    }

    const resultAction = await dispatch(createBooking({ 
      booking: { ...values },
      token: token as string
    }));
    
    if (createBooking.fulfilled.match(resultAction)) {
      Toast.success("Booking created successfully! ✅");
    } else {
      Toast.error("Failed to create booking ❌");
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    Toast.error("Failed to create booking ❌");
  }
};

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete Your Booking</DialogTitle>
          <DialogDescription>
            Fill in your details to confirm your stay. Click 'Confirm Booking' when you're done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="customerName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="customerPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="noOfRooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Rooms</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Number of rooms"
                      type="number"
                      min="1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label>Guests</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={`Adults: ${adults}, Children: ${children}`} />
                </SelectTrigger>
                <SelectContent className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Adults</span>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => handleDecrement("adults")}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{adults}</span>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => handleIncrement("adults")}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm">Children</span>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => handleDecrement("children")}
                      >
                        -
                      </Button>
                      <span className="w-6 text-center">{children}</span>
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => handleIncrement("children")}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="checkIn"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check In</FormLabel>
                    <Popover 
                      open={checkInOpen} 
                      onOpenChange={setCheckInOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            onClick={() => setCheckInOpen(true)}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) {
                              field.onChange(date);
                              setCheckInOpen(false);
                            }
                          }}
                          disabled={(date) => date < today}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checkOut"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Check Out</FormLabel>
                    <Popover 
                      open={checkOutOpen} 
                      onOpenChange={setCheckOutOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            type="button"
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                            onClick={() => setCheckOutOpen(true)}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            if (date) {
                              field.onChange(date);
                              setCheckOutOpen(false);
                            }
                          }}
                          disabled={(date) => 
                            date < today || 
                            date <= new Date(checkInDate)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button type="submit">Confirm Booking</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}