import ProblemItem, { Problem } from '../ProblemItem/ProblemItem'

import styles from './index.module.css'

interface Props {
  problems: Array<Problem>
}

const ProblemList = ({ problems }: Props) => {

  return <div className={styles.problemList}>

    {problems.map(problem => (
      <ProblemItem 
      problem_name={problem.problem_name}
      url={problem.url}
      is_completed={problem.is_completed}
      />
    ))}

  </div>
}

export default ProblemList