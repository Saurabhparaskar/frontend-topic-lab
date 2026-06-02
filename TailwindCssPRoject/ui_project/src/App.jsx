import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import './App.css'

const App =()=> {
  const [count, setCount] = useState(0)
  const users =
  [
    {img :'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro :'',
       tag:'Satisfied'
    },

    {
      img :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro :'',
       tag:'UnderServed'
    },

    {
      img :'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHdvbWFufGVufDB8fDB8fHww',
      intro :'',
       tag:'UnderBanked'
    },
    {
      img :'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      intro :'',
      tag :'Yooo'
    }
  ]

  return (
    <>
     <div >
      <Section1 users={users}/>
      <Section2/>
     </div>
    </>
  )
}

export default App
