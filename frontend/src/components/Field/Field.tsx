import styles from './index.module.css'

const Field = ({ ...props }) => {

  return <input className={styles.Field} {...props} />
}

export default Field