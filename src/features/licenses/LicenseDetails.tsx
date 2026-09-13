import { useParams } from "react-router-dom";
import { licenses } from "./data";
export function LicenseDetails(){
 const {licenseId}=useParams(); const license=licenses.find(x=>x.id===licenseId);
 if(!license)return <p role="alert">License not found.</p>;
 return <><h1>License details</h1><h2>{license.productName}</h2><p>Status: {license.status}</p><p>Expires: {license.expiresAt??"Not set"}</p></>;
}
