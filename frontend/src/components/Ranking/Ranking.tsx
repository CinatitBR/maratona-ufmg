import RankItem from '../RankItem/RankItem'

import styles from './index.module.css'

const data = {
  institution: 'UFMG',
  username: 'Bernardo Amorim',
  problemCount: 12,
}

const Ranking = () => {

  return <article className={styles.wrapper}>

    <RankItem 
      divider
      position={1}
      data={data}
    />

  </article>

}

export default Ranking