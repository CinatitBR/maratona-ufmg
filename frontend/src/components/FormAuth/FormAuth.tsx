import FieldList from '../FieldList/FieldList'
import Button from '../Button/Button'
import Link from '../Link/Link'

import styles from './index.module.css'

interface Props {
  children: React.ReactNode,
  switchLink: React.ReactNode,
  buttonText: string,
}

const FormAuth = ({ children, switchLink, buttonText }: Props) => {

  return <div className={styles.wrapper}>
    <div className={styles.heading}>OR</div>

    <form>
      <FieldList>
        {children}
      </FieldList>

      <div>
        <Button>{buttonText}</Button>
        
        {switchLink}
      </div>
    </form>
  </div>
}

export default FormAuth