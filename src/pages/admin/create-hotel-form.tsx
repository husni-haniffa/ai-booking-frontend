"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import { createHotel } from "@/lib/features/hotelSlice";
import Toast from "@/lib/toast";
import { AppDispatch } from "@/lib/store";



export function ProfileForm() {
const dispatch = useDispatch<AppDispatch>();

const formSchema = z.object({
  name: z.string().regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces."),
  image: z.string().url({ message: "Enter a valid image URL." }),
   description: z.string().regex(/^[a-zA-Z0-9\s,.$-]+$/, "Description can only contain letters, numbers, spaces, commas, periods, dollar signs, and hyphens."),
  location: z.string().regex(/^[a-zA-Z\s,]+$/, "Location must contain only letters, spaces, and commas."),
  price: z.number().positive("Price must be a positive number"),
});


const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      location: "",
      price: 0,
    },
});

const hotelState = useSelector((state: any) => state.hotel);

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  try {
    const resultAction = dispatch(createHotel({ ...values}));

    if (createHotel.fulfilled.match(resultAction)) {
      Toast.success("Hotel created successfully! ✅");
    } else {
      Toast.error( "Failed to create hotel ❌");
    }
  } catch (error) {
    Toast.error("An unexpected error occurred!");
  }
};


  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
       <Form {...form}>
      <FormField
       control={form.control} // Connects field to React Hook Form
        name="name" // Matches the field name in our schema
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="Enter username" {...field} />
            </FormControl>
            <FormMessage /> {/* Displays validation errors */}
          </FormItem>
        )}
      />

<FormField
       control={form.control} // Connects field to React Hook Form
        name="image" // Matches the field name in our schema
        render={({ field }) => (
          <FormItem>
            <FormLabel>Image</FormLabel>
            <FormControl>
              <Input placeholder="Enter image" {...field} />
            </FormControl>
            <FormMessage /> {/* Displays validation errors */}
          </FormItem>
        )}
      />

<FormField
       control={form.control} // Connects field to React Hook Form
        name="description" // Matches the field name in our schema
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Input placeholder="Enter description" {...field} />
            </FormControl>
            <FormMessage /> {/* Displays validation errors */}
          </FormItem>
        )}  
      />

<FormField
       control={form.control} // Connects field to React Hook Form
        name="location" // Matches the field name in our schema
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="Enter location" {...field} />
            </FormControl>
            <FormMessage /> {/* Displays validation errors */}
          </FormItem>
        )}
      />

<FormField
       control={form.control} // Connects field to React Hook Form
        name="price" // Matches the field name in our schema
        render={({ field }) => (
          <FormItem>
            <FormLabel>Price</FormLabel>
            <FormControl>
              <Input
                  type="number"
                  placeholder="Enter price"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))} // Ensure it's a number
                />
            </FormControl>
            <FormMessage /> {/* Displays validation errors */}
          </FormItem>
        )}
        />


      
      <Button type="submit">Submit</Button>
    </Form>
    </form>
   
  );
}
