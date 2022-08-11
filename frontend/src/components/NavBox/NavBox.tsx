import NavItem from '../NavItem/NavItem'
import styles from './index.module.css'

interface Props {
  title: string,
  linkList: {
    id: number,
    title: string,
    to: string
  }[]
}

const NavBox = ({ title, linkList }: Props) => {
  
  return <div className={styles.navBox}>

    <h3>{title}</h3>

    <nav>
      {linkList.map(link => (
        <NavItem key={link.id} to={link.to}>
          {link.title}
        </NavItem>
      ))}
    </nav>

  </div>
}

export default NavBox