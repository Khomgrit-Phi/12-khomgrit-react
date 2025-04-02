import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="bg-[#334DD8] text-white p-4 shadow-md">
        <ul className="font-bold text-l flex gap-4 justify-end mr-8">
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>

            <Link to="/owner" className="hover:text-blue-500">
            Owner

            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
