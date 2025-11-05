export type UserRole = "admin" | "management" | "employee";

export const ROLES = {
  ADMIN: "admin" as UserRole,
  MANAGEMENT: "management" as UserRole,
  EMPLOYEE: "employee" as UserRole,
};

export const ROLE_PERMISSIONS = {
  admin: {
    dashboard: true,
    supportCenter: true,
    inventory: true,
    systemUpdates: true,
    network: true,
    access: true,
    audit: true,
    reports: true,
    notifications: true,
    adminConsole: true,
  },
  management: {
    dashboard: true,
    supportCenter: true,
    inventory: true,
    systemUpdates: true,
    network: true,
    access: true,
    audit: false,
    reports: true,
    notifications: true,
    adminConsole: false,
  },
  employee: {
    dashboard: true,
    supportCenter: true,
    inventory: false,
    systemUpdates: false,
    network: false,
    access: true,
    audit: false,
    reports: false,
    notifications: true,
    adminConsole: false,
  },
};

export function hasPermission(role: UserRole, module: keyof typeof ROLE_PERMISSIONS.admin): boolean {
  return ROLE_PERMISSIONS[role]?.[module] ?? false;
}
