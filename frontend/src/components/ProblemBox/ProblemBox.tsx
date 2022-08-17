import { useEffect, useRef, useState, MutableRefObject } from 'react'
import { Problem } from '../ProblemItem/ProblemItem'
import ProblemList from '../ProblemList/ProblemList'

import styles from './index.module.css'

interface Props {
  difficulty: 'easy' | 'medium' | 'hard'
  problems: Array<Problem>
}

const titles = {
  easy: 'Nível 1',
  medium: 'Nível 2',
  hard: 'Nível 3'
}

const colors = {
  easy: 'var(--green)',
  medium: 'var(--yellow)',
  hard: 'var(--red-1)'
}

const ProblemBox = ({ 
    difficulty, 
    problems
  }: Props) => {
  const title = titles[difficulty]
  const backgroundColor = colors[difficulty]
  const refBody = useRef() as MutableRefObject<HTMLDivElement>

  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
    // Set .body max-height
    // It's required for the collapse transition to work.
    refBody.current.style.maxHeight = `${refBody.current.scrollHeight}px`
  }, [])

  return <article 
    className={styles.wrapper}
  >

    <header 
      onClick={() => setCollapse(state => !state)}
    >
      <div 
        className={styles.circle}
        style={{backgroundColor}}
      >
      </div>    
      
      <h3>{title}</h3>
    </header>  

    <div 
      className={`${styles.body} ${collapse && styles.collapse}`}
      ref={refBody}
    >
      <ProblemList problems={problems} />
    </div>
  
  </article>
}

export default ProblemBox