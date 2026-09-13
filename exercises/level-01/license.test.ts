import {describe,expect,it} from "vitest"; import {getLicenseLabel} from "./license";
describe("getLicenseLabel",()=>{
it("labels an active license with its expiry",()=>expect(getLicenseLabel({productName:"Camera",status:"active",expiresAt:"2027-01-01"})).toBe("Camera — Active until 2027-01-01"));
it("labels an expired license",()=>expect(getLicenseLabel({productName:"Audio",status:"expired"})).toBe("Audio — Expired"));
it("labels a trial without an expiry",()=>expect(getLicenseLabel({productName:"Entry",status:"trial"})).toBe("Entry — Trial"));});
