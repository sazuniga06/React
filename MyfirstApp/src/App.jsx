import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'santiagozm_1999',
    name: 'Santiago Alejandro Zuñiga Melo',
    isFollowing: false
  },
  {
    userName: 'karenmora936',
    name: 'Karen Lizeth Mora Gomez',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
