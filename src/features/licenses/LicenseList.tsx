import { Badge, Button, Card, Input, Select, makeStyles, tokens } from "@fluentui/react-components";
import { Link, useSearchParams } from "react-router-dom";
import type { License, LicenseStatus } from "./types";
const useStyles=makeStyles({list:{display:"grid",gap:tokens.spacingVerticalM,marginTop:tokens.spacingVerticalL},card:{padding:tokens.spacingVerticalM},toolbar:{display:"flex",gap:tokens.spacingHorizontalM,flexWrap:"wrap"}});
export function LicenseList({licenses,onAdd}:{licenses:License[];onAdd?:()=>void}) {
  const styles=useStyles(); const [params,setParams]=useSearchParams();
  const search=params.get("search")??""; const status=params.get("status")??"";
  const filtered=licenses.filter(x=>x.productName.toLowerCase().includes(search.toLowerCase())&&(!status||x.status===status));
  const update=(key:string,value:string)=>{const next=new URLSearchParams(params);value?next.set(key,value):next.delete(key);setParams(next);};
  return <><div className={styles.toolbar}>
    <Input aria-label="Search licenses" value={search} onChange={(_,d)=>update("search",d.value)} />
    <Select aria-label="Filter by status" value={status} onChange={(_,d)=>update("status",d.value)}><option value="">All statuses</option>{(["active","expired","trial"] as LicenseStatus[]).map(x=><option key={x}>{x}</option>)}</Select>
    {onAdd&&<Button appearance="primary" onClick={onAdd}>Add license</Button>}
  </div><div className={styles.list}>{filtered.map(x=><Card className={styles.card} key={x.id}><Link to={x.id}>{x.productName}</Link><Badge appearance="filled">{x.status}</Badge></Card>)}{filtered.length===0&&<p>No licenses match these filters.</p>}</div></>;
}
