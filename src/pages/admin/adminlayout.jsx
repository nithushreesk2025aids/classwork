import { Link, Outlet } from "react-router-dom";

function Admin() {
    return (
        <div>
            <nav>
                <Link to={"/adminlayout/dashboard"}>Dashboard</Link>
                <Link to={"/adminlayout/userdetails"}>Userdetails</Link>
                <Link to={"/adminlayout/settings"}>Settings</Link>
            </nav>
            <Outlet/>
        </div>
      );
}

export default Admin ;