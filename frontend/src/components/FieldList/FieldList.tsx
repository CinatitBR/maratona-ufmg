import Field from '../Field/Field'

import styles from './index.module.css'

interface Props {
  children: React.ReactNode
}

const FieldList = ({ children }: Props) => {

  return <div className={styles.FieldList}>
    {children}
  </div>
  
}

export default FieldList