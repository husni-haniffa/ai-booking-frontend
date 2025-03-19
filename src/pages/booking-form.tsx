import CustomSelect from "@/components/shared/select";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export function BookingForm() {

   const [theme, setTheme] = useState("");

   const themeOptions = [
     { value: "light", label: "Light" },
     { value: "dark", label: "Dark" },
     { value: "system", label: "System" },
   ];
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Book Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Input placeholder="Name" />

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>

        <CustomSelect
          options={themeOptions}
          placeholder="Select Theme"
          value={theme}
          onValueChange={(value) => setTheme(value)}
         // Additional styles
        />

        <DialogFooter>
          <Button type="submit">Book Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
