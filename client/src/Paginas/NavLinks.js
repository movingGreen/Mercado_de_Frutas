import { Outlet, Link } from "react-router-dom";

const NavLinks = () => {
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
};

export default NavLinks;
