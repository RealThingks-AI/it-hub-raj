import { useAuth } from "./useAuth";
import { hasPermission } from "@/utils/roles";
import { ROLE_PERMISSIONS } from "@/utils/roles";

export function useRole() {
  const { user } = useAuth();

  const checkPermission = (module: keyof typeof ROLE_PERMISSIONS.admin): boolean => {
    if (!user) return false;
    return hasPermission(user.role, module);
  };

  const isAdmin = user?.role === "admin";
  const isManagement = user?.role === "management";
  const isEmployee = user?.role === "employee";

  return {
    role: user?.role,
    isAdmin,
    isManagement,
    isEmployee,
    checkPermission,
  };
}
