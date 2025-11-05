import { ReactNode } from "react";
import { useRole } from "@/hooks/useRole";
import { ROLE_PERMISSIONS } from "@/utils/roles";
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

interface RoleGuardProps {
  children: ReactNode;
  module: keyof typeof ROLE_PERMISSIONS.admin;
  fallback?: ReactNode;
}

export function RoleGuard({ children, module, fallback }: RoleGuardProps) {
  const { checkPermission } = useRole();

  if (!checkPermission(module)) {
    return (
      fallback || (
        <div className="flex items-center justify-center min-h-[400px]">
          <Card className="max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
                <p className="text-muted-foreground">
                  You don't have permission to access this module.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    );
  }

  return <>{children}</>;
}
