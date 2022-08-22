import styles from './index.module.css'

interface Props {
  divider?: boolean,
  position: number, 
  data: {
    institution: string,
    username: string,
    problemCount: number,
  }
}

const RankItem = ({ divider=false }: Props) => {
  
  return <div 
    className={`${styles.rankItem} ${divider && styles.divider}`}
  >
    <div className={styles.left}>
      <h3>1. [UFMG] Bernardo Amorim</h3>

      <div className={styles.progressBar}>
        <div className={styles.progress}></div>
      </div>
    </div>

    <span className={styles.count}>12 problems</span>
  </div>
}

export default RankItem
