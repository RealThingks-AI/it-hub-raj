export const ROUTES = {
  DASHBOARD: "/",
  SUPPORT_CENTER: "/support",
  INVENTORY: "/inventory",
  SYSTEM_UPDATES: "/system-updates",
  NETWORK: "/network",
  ACCESS: "/access",
  AUDIT: "/audit",
  REPORTS: "/reports",
  NOTIFICATIONS: "/notifications",
  ADMIN: "/admin",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];
