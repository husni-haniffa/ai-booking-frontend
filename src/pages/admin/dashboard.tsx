import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HotelTable } from "@/components/admin/hotel-table"
import { BookingTable } from "@/components/admin/booking-table"
import { CreateHotelForm } from "@/components/admin/create-hotel-form"


export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <Tabs defaultValue="hotels" className="space-y-4">
          <TabsList>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="create-hotel">Create Hotel</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hotels" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Hotels</h2>
            </div>
            <HotelTable />
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Bookings</h2>
            </div>
            <BookingTable />
          </TabsContent>

          <TabsContent value="create-hotel" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Create New Hotel</h2>
            </div>
            <CreateHotelForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
