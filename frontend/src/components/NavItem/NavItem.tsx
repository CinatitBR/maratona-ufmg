import { NavLink } from 'react-router-dom'

import styles from './index.module.css'

interface Props {
  children: React.ReactNode,
  variant?: 'internal' | 'external'
  to: string,
}

const NavItem = ({ 
  children, 
  to, 
  variant='internal'
  }: Props) => {

  // External link: urls out of the domain
  if (variant=='external')
    return <a 
      href={to}
      className={`${styles.externalLink}`}
      target="_blank"
    >
      {children}
    </a>


  // Internal link: urls inside the domain
  return <NavLink 
    to={to} 
    className={({ isActive }) => (
      isActive ? 
      `${styles.internalLink} ${styles.active}`
      : styles.internalLink
    )}
  >
    {children}
  </NavLink>
  
}

export default NavItem