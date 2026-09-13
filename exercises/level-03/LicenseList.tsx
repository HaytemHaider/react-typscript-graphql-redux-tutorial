import type {License} from "../../src/features/licenses/types";
export function LicenseList({licenses}:{licenses:License[]}){
 // TODO(level-03): Add a controlled search input and derive filtered licenses.
 return <>{licenses.map(x=><p key={x.id}>{x.productName}</p>)}</>;
}
