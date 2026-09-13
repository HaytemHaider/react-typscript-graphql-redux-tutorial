import type {License} from "../exercises/level-01/license";
export function getLicenseLabel(license:License):string {
 const suffix=license.status==="active"?(license.expiresAt?`Active until ${license.expiresAt}`:"Active"):license.status==="expired"?"Expired":"Trial";
 return `${license.productName} — ${suffix}`;
}
