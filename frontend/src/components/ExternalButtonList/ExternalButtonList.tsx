import googleLogo from '../../assets/google-logo.png'

import styles from './index.module.css'

const ExternalButtonList = () => {
  
  return <article className={styles.wrapper}>
    <h3>Sign up using social networks</h3>

    <div className={styles.buttonList}>
      <button>
        <img 
          src={googleLogo} 
          alt="Google logo" 
          width={30}
        />
      </button>
    </div>
  </article>
}

export default ExternalButtonList