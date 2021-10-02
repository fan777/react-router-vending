import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="NavBar">
      <NavLink exact to='/cheetos'>Cheetos</NavLink>
      <NavLink exact to='/steak'>Steak</NavLink>
      <NavLink exact to='/gummy-bears'>Gummy Bears</NavLink>
    </nav>
  )
}

export default NavBar;