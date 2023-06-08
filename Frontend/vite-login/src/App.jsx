import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Signup from "./Signup"
import Home from "./Home"
import About from "./About"
import Admin from "./Admin"


function App() {
  

  return (
    <>
      <Routes>
         <Route path="/" element={<Login />}/>
         <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  )
}

export default App
