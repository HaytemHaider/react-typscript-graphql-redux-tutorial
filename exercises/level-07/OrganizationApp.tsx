import type{License}from"../../src/features/licenses/types";const data:License[]=[{id:"1",organizationId:"org-1",productName:"Camera",status:"active"},{id:"2",organizationId:"org-2",productName:"Entry",status:"trial"}];
export function OrganizationApp(){
 // TODO(level-07): Configure a slice/store and use typed selector/dispatch hooks.
 return <><label>Organization<select defaultValue="org-1"><option value="org-1">Acme AB</option><option value="org-2">Globex</option></select></label>{data.map(x=><p key={x.id}>{x.productName}</p>)}</>;
}
