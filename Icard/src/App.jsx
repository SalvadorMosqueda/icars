import { useState } from 'react'
import {Button}  from "semantic-ui-react"          
import "./App.scss"
import {ClientLayout} from './layouts'
import {Navigation} from './routes'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
    <Navigation/>
   
    </>
    
  )
}

export default App
