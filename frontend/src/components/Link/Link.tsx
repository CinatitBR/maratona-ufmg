import styles from './index.module.css'

interface Props {
  children: string,
  href: string
}

const Link = ({ children, href }: Props) => {
  return <a className={styles.Link} href={href}>
    {children}
  </a>
}

export default Link