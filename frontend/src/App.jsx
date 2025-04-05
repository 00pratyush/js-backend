import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=> {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h2>backend and frontend</h2>
      <p>Jokes : {jokes.length}</p>

      {
        jokes.map(joke => (
          <div id={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }

    </>
  )
}

export default App
