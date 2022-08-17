import styles from './index.module.css'

interface Problem {
  problem_name: string,
  url: string,
  is_completed: boolean
}

const ProblemItem = ({ problem_name, url, is_completed }: Problem) => {
  return <div className={styles.wrapper}>
    <input 
      type="checkbox" 
      className={styles.checkbox} 
      checked={is_completed}
    />
    
    <h4>
      <a href={url}>{problem_name}</a>
    </h4>
  </div>
}

export type { Problem }
export default ProblemItem