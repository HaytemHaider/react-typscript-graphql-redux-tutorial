export type LicenseStatus = "active" | "expired" | "trial";
export interface License {
  id: string;
  organizationId: string;
  productName: string;
  status: LicenseStatus;
  expiresAt?: string;
  licenseKey?: string;
}
