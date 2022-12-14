import NavItem from '../NavItem/NavItem'
import styles from './index.module.css'

interface Props {
  title: string,

  linkList: {
    id: number,
    title: string,
    to: string
  }[],

  maxWidth: number,
  variant?: 'internal' | 'external'
}

const NavBox = ({ 
  title, 
  linkList, 
  maxWidth,
  variant
  }: Props) => {
  return <div 
    className={styles.navBox} 
    style={{maxWidth}}
  >

    <h3>{title}</h3>

    <nav>
      {linkList.map(link => (
        <NavItem 
          key={link.id} 
          to={link.to}
          variant={variant}
        >
          {link.title}
        </NavItem>
      ))}
    </nav>

  </div>
}

export default NavBox