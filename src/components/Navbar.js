
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
        
        <NavLink 
          to="/novo" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Nova Ocorrência
        </NavLink>
        
      </ul>
      
    </nav>
  );
}

export default Navbar;
