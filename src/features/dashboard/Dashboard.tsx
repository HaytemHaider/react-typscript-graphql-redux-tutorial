import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector, type RootState } from "../../app/store";
import { licenses } from "../licenses/data";
const selectSummary=createSelector([(s:RootState)=>s.organization.selectedId],id=>{
 const items=licenses.filter(x=>x.organizationId===id);
 return {total:items.length,active:items.filter(x=>x.status==="active").length,expired:items.filter(x=>x.status==="expired").length,trial:items.filter(x=>x.status==="trial").length};
});
export function Dashboard(){const s=useAppSelector(selectSummary);return <><h1>Dashboard</h1><dl><dt>Total licenses</dt><dd>{s.total}</dd><dt>Active</dt><dd>{s.active}</dd><dt>Expired</dt><dd>{s.expired}</dd><dt>Trial</dt><dd>{s.trial}</dd></dl></>}
