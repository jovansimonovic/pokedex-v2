import { NavLink } from "react-router";
import pokeball from "../assets/images/pokeball.webp";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"} className="logo">
        <img src={pokeball} width={30} height={30} alt="logo image" />
        <span>Pokédex</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
