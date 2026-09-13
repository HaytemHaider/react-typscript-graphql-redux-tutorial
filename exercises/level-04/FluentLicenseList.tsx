import type{License}from"../../src/features/licenses/types";
export function FluentLicenseList({licenses}:{licenses:License[]}){
 // TODO(level-04): Use Fluent Input, Button, Badge, Card, makeStyles, and tokens.
 return <div>{licenses.map(x=><div key={x.id}>{x.productName}</div>)}</div>;
}
