import { NavLink } from 'react-router-dom';
import Paths from '../../../shared/paths';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <ul>
        <NavLink to={Paths.home}>Home</NavLink>
        <NavLink to={Paths.products}>Shop</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
