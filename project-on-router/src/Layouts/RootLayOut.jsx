
import { NavLink,Outlet } from "react-router-dom";
import BreadCrumps from "../Components/BreadCrumps";


function RootLayOut() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Career</NavLink>
        </nav>
        <BreadCrumps/>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default RootLayOut;
