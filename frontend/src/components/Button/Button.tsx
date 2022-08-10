import styles from './index.module.css'

interface Props {
  children: React.ReactNode
}

const Button = ({ children, ...props }: Props) => {

  return <button className={styles.Button} {...props}>
    {children}
  </button>
}

export default Button