import maratonaLogo from '../../assets/maratona-logo.png'

import styles from './index.module.css'

interface Props {
  text: string
}

const LogoHeaderBox = ({ text }: Props) => {

  return <header className={styles.wrapper}>
      <img 
        src={maratonaLogo} 
        alt="Logo maratona UFMG" 
        width={120}
      />

      <h1>{text}</h1>
  </header>

}

export default LogoHeaderBox