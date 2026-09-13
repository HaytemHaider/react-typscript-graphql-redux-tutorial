export type LicenseStatus = "active" | "expired" | "trial";
export interface License { productName:string; status:LicenseStatus; expiresAt?:string }
export function getLicenseLabel(_license:License):string {
  // TODO(level-01): Narrow status and include the optional expiry date.
  return "License";
}
