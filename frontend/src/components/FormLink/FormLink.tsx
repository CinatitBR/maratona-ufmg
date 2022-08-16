import { Link as RouterLink } from 'react-router-dom'

import styles from './index.module.css'

interface Props {
  children: string,
  href: string
}

const FormLink = ({ children, href }: Props) => {
  return <RouterLink className={styles.formLink} to ={href}>
    {children}
  </RouterLink>
}

export default FormLink