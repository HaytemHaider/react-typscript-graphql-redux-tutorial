import { gql } from "@apollo/client";
export const LICENSES_QUERY=gql`query Licenses($organizationId: ID!){licenses(organizationId:$organizationId){id organizationId productName status expiresAt}}`;
export const ADD_LICENSE_MUTATION=gql`mutation AddLicense($organizationId:ID!,$productName:String!,$licenseKey:String!){addLicense(organizationId:$organizationId,productName:$productName,licenseKey:$licenseKey){id organizationId productName status}}`;
