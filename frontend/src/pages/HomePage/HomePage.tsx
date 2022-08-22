import NavBox from '../../components/NavBox/NavBox'
import ProblemBox from '../../components/ProblemBox/ProblemBox'
import Ranking from '../../components/Ranking/Ranking'

import styles from './index.module.css'

const topics = [
  { id: 1, title: 'Básicos', to:'/' },
  { id: 2, title: 'STL', to:'/t' },
  { id: 3, title: 'Guloso', to:'/t' },
  { id: 4, title: 'Binary Search', to:'/t' }
]

const resources = [
  { id: 1, title: 'Slide - Introdução e complexidade', to:'https://drive.google.com/drive/u/0/folders/1WCpWlAyrkWwZJOiQx-q43FKxpCCT3pBb' },
  { id: 2, title: 'Aula - Introdução e complexidade', to:'https://www.youtube.com/watch?v=cu3kKbkEZSw&t=56s' },
  { id: 3, title: 'Big O MIT', to:'https://web.mit.edu/16.070/www/lecture/big_o.pdf' },
  { id: 4, title: 'Big O Wikipedia', to:'https://en.wikipedia.org/wiki/Big_O_notation' }
]

const problems = [
  {
      "id": 1,
      "problem_name": "FATORIA2",
      "url": "https://br.spoj.com/problems/FATORIA2/",
      "difficulty": 1,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 2,
      "problem_name": "PRIMO",
      "url": "https://br.spoj.com/problems/PRIMO/",
      "difficulty": 1,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 3,
      "problem_name": "Divisibility",
      "url": "https://codeforces.com/problemset/problem/1328/A",
      "difficulty": 2,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 4,
      "problem_name": "QUERM",
      "url": "https://br.spoj.com/problems/QUERM/",
      "difficulty": 2,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 5,
      "problem_name": "CME",
      "url": "https://codeforces.com/contest/1241/problem/A",
      "difficulty": 3,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 6,
      "problem_name": "Bad Prices",
      "url": "http://codeforces.com/contest/1213/problem/B",
      "difficulty": 3,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  },
  {   "id": 7,
      "problem_name": "Swap Sort",
      "url": "https://codeforces.com/contest/489/problem/A",
      "difficulty": 2,
      "topic": "http://127.0.0.1:8000/topics/1/",
      "is_completed": false
  }
]

const HomePage = () => {

  return <div className={styles.wrapper}>

    <div className={styles.top}>
      <NavBox 
        title="Tópicos"
        linkList={topics}
        maxWidth={350}
      />

      <ProblemBox 
        difficulty="hard"
        problems={problems}
      />

      <NavBox
        title="Resources"
        linkList={resources}
        maxWidth={350}
        variant="external"
      />
    </div>

    <Ranking />

  </div>

}

export default HomePage