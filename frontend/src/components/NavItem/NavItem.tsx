import { NavLink } from 'react-router-dom'

import styles from './index.module.css'

interface Props {
  children: React.ReactNode,
  to: string,
}

const NavItem = ({ children, to }: Props) => {
  return <NavLink 
    to={to} 
    className={({ isActive }) => (
      isActive ? 
      `${styles.navItem} ${styles.active}`
      : styles.navItem
    )}
  >
    {children}
  </NavLink>
}

export default NavItem