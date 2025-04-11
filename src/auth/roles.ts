import { Roles } from "./globals"
import { useUser } from "@clerk/clerk-react"

export const checkRole =  (role: Roles) => {
    const { user } =  useUser()
    return user?.publicMetadata?.role === role
}