export const APP_NAME = "RealThingks IT";
export const APP_ACRONYM = "RITOMS";
export const APP_DESCRIPTION = "IT Operations Management System";

export const TICKET_PRIORITIES = ["Low", "Medium", "High", "Critical"] as const;
export const TICKET_STATUSES = ["Open", "In Progress", "Pending", "Resolved", "Closed"] as const;
export const TICKET_CATEGORIES = ["Hardware", "Software", "Network", "Access", "Other"] as const;

export const ASSET_STATUSES = ["Active", "Under Repair", "Retired", "In Storage"] as const;
export const ASSET_CATEGORIES = ["Laptop", "Desktop", "Server", "Peripheral", "Network Device", "Other"] as const;

export const PROCUREMENT_STATUSES = ["Pending", "Approved", "Rejected", "Completed"] as const;

export const UPDATE_TYPES = ["Security", "Feature", "Critical"] as const;
export const UPDATE_STATUSES = ["Pending", "Installed", "Failed", "Scheduled"] as const;

export const NETWORK_STATUS = ["Online", "Offline", "Warning"] as const;
export const CONNECTION_TYPES = ["LAN", "Wi-Fi", "VPN"] as const;

export const ACCESS_STATUSES = ["Pending", "Approved", "Rejected", "Revoked"] as const;

export const NOTIFICATION_TYPES = [
  "Ticket Update",
  "License Expiry",
  "Procurement Approval",
  "Access Update",
  "Backup Failure",
  "Update Pending",
  "System Alert"
] as const;
