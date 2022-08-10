import { Link as RouterLink } from 'react-router-dom'

import styles from './index.module.css'

interface Props {
  children: string,
  href: string
}

const Link = ({ children, href }: Props) => {
  return <RouterLink className={styles.Link} to={href}>
    {children}
  </RouterLink>
}

export default Link