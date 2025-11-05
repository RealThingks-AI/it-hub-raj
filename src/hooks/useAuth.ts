import { useState, useEffect } from "react";
import { UserRole, ROLES } from "@/utils/roles";

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement Supabase auth integration
    // For now, set a mock user
    const mockUser: User = {
      id: "1",
      email: "admin@realthingks.com",
      name: "Admin User",
      role: ROLES.ADMIN,
    };
    
    setUser(mockUser);
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // TODO: Implement Supabase login
    console.log("Login:", email, password);
  };

  const logout = async () => {
    // TODO: Implement Supabase logout
    setUser(null);
  };

  return {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };
}
