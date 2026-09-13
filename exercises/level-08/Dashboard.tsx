import type{License}from"../../src/features/licenses/types";
export function Dashboard({licenses: _licenses}:{licenses:License[]}){
 // TODO(level-08): Create selectors that derive counts from licenses and selected organization.
 return <><p>Total licenses: 0</p><p>Active: 0</p><p>Expired: 0</p><p>Trial: 0</p></>;
}
