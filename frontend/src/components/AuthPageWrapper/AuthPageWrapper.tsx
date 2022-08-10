
import styles from './index.module.css'

interface Props {
  children: React.ReactNode
}

const AuthPageWrapper = ({ children }: Props) => {

  return <div className={styles.wrapper}>
    {children}
  </div>
}

export default AuthPageWrapper