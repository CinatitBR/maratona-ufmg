import ProblemItem, { Problem } from '../ProblemItem/ProblemItem'

import styles from './index.module.css'

interface Props {
  problems: Array<Problem>
}

const ProblemList = ({ problems }: Props) => {

  return <div className={styles.problemList}>

    {problems.map(problem => (
      <ProblemItem 
        key={problem.id}
        problem={problem}
      />
    ))}

  </div>
}

export default ProblemList