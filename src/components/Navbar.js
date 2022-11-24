
import { Link, NavLink } from "react-router-dom";   // <== IMPORT

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
     
        {/*    NAV LINK SUBSTITUIU O LINK POIS ELE PODE SE
        DENOMIAR COMO ATIVO   */}
        <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          Sobre
        </NavLink>
        
        {/* <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Ocorrências
        </NavLink> */}
        
      </ul>
      
    </nav>
  );
}

export default Navbar;
