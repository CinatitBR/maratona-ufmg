import styles from './index.module.css'

interface Problem {
  id: number,
  problem_name: string,
  url: string,
  is_completed: boolean
}

interface Props {
  problem: Problem
}

const ProblemItem = ({ problem }: Props) => {
  return <div className={styles.wrapper}>
    <input 
      type="checkbox" 
      className={styles.checkbox} 
      checked={problem.is_completed}
    />
    
    <h4>
      <a href={problem.url} target="_blank">{problem.problem_name}</a>
    </h4>
  </div>
}

export type { Problem }
export default ProblemItem