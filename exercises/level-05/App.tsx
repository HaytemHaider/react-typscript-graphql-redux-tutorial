import{Outlet}from"react-router-dom";
export function Layout(){return <><nav>Mini Systems</nav><Outlet/></>};export function LicenseLinks(){return <a href="/licenses">Camera Station</a>};export function Details(){return <h1>Licenses</h1>}
// TODO(level-05): Use NavLink, a relative license link, useParams, and nested routes.
