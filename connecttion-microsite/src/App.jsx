import { useState } from 'react'
import NavBar from './components/NavBar'
import Team from './components/Team'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center'>
      <div className='w-10/12 p-5'>
        <NavBar />
        <Team />
      </div>
    </div>
  )
}

export default App
