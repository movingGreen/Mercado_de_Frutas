import React from "react";

import { Outlet, Link } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Carrinho">Carrinho</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
