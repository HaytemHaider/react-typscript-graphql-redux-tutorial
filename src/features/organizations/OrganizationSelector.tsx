import { Select } from "@fluentui/react-components";
import { organizationSelected, useAppDispatch, useAppSelector } from "../../app/store";
export function OrganizationSelector() {
  const value=useAppSelector(s=>s.organization.selectedId);
  const dispatch=useAppDispatch();
  return <label>Organization <Select value={value} onChange={(_,d)=>dispatch(organizationSelected(d.value))}>
    <option value="org-1">Acme AB</option><option value="org-2">Globex</option>
  </Select></label>;
}
