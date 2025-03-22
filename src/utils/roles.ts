import { useUser } from "@clerk/clerk-react";
import { Roles } from "@/types/globals";

export const CheckRole = (role: Roles): boolean => {
    const { user } = useUser();
    console.log(user?.publicMetadata?.role);
    return user?.publicMetadata?.role === role;
};

export const useCurrentUser = () => {
    const { user } = useUser();
    return user;
};