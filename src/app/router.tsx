import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../features/dashboard/Dashboard";
import { LicenseList } from "../features/licenses/LicenseList";
import { LicenseDetails } from "../features/licenses/LicenseDetails";
import { licenses } from "../features/licenses/data";
const Placeholder=({title}:{title:string})=><><h1>{title}</h1><p>This area is intentionally small for the tutorial.</p></>;
export const router=createBrowserRouter([{path:"/",element:<AppLayout />,children:[
 {index:true,element:<Dashboard />},{path:"organizations",element:<Placeholder title="Organizations"/>},
 {path:"licenses",element:<LicensesPage/>},{path:"licenses/:licenseId",element:<LicenseDetails/>},
 {path:"products",element:<Placeholder title="Products"/>},{path:"settings",element:<Placeholder title="Settings"/>}
]}]);
function LicensesPage(){return <><h1>Licenses</h1><LicenseList licenses={licenses}/></>}
