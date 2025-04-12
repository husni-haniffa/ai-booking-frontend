import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AdminNavbar = () => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="border-b">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview Content</TabsContent>
      <TabsContent value="users">Users Content</TabsContent>
      <TabsContent value="settings">Settings Content</TabsContent>
    </Tabs>
  )
}

export default AdminNavbar;