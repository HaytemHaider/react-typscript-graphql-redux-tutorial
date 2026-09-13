import { useState, type FormEvent } from "react";
import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, Field, Input } from "@fluentui/react-components";
import { useMutation } from "@apollo/client/react";
import { ADD_LICENSE_MUTATION, LICENSES_QUERY } from "../../graphql/operations";
export function AddLicenseDialog({organizationId}:{organizationId:string}){
 const [open,setOpen]=useState(false); const [productName,setProductName]=useState(""); const [licenseKey,setLicenseKey]=useState("");
 const [add,{loading,error}]=useMutation(ADD_LICENSE_MUTATION,{refetchQueries:[LICENSES_QUERY],onCompleted:()=>setOpen(false)});
 const submit=(event:FormEvent)=>{event.preventDefault();if(productName.trim()&&licenseKey.trim())void add({variables:{organizationId,productName,licenseKey}})};
 return <><Button appearance="primary" onClick={()=>setOpen(true)}>Add license</Button><Dialog open={open} onOpenChange={(_,d)=>setOpen(d.open)}><DialogSurface><form onSubmit={submit}><DialogBody><DialogTitle>Add license</DialogTitle><DialogContent>
  <Field label="Product name" required><Input value={productName} onChange={(_,d)=>setProductName(d.value)}/></Field>
  <Field label="License key" required><Input value={licenseKey} onChange={(_,d)=>setLicenseKey(d.value)}/></Field>
  {error&&<p role="alert">Could not add license. Try again.</p>}
 </DialogContent><DialogActions><Button appearance="secondary" onClick={()=>setOpen(false)}>Cancel</Button><Button appearance="primary" type="submit" disabled={!productName.trim()||!licenseKey.trim()||loading}>{loading?"Adding…":"Add"}</Button></DialogActions></DialogBody></form></DialogSurface></Dialog></>;
}
