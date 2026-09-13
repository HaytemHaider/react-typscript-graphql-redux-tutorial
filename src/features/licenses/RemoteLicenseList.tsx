import { useQuery } from "@apollo/client/react";
import { LICENSES_QUERY } from "../../graphql/operations";
import type { License } from "./types";
import { LicenseList } from "./LicenseList";
import { ErrorState } from "../../components/ErrorState";
export function RemoteLicenseList({organizationId}:{organizationId:string}){
 const {data,loading,error}=useQuery<{licenses:License[]}>(LICENSES_QUERY,{variables:{organizationId}});
 if(loading)return <p role="status">Loading licenses…</p>;
 if(error)return <ErrorState message="Could not load licenses."/>;
 return <LicenseList licenses={data?.licenses??[]}/>;
}
