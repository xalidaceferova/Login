import { Route, Routes } from "react-router-dom"
import Dash from "./Dash"
import Signin from "./Signin"
import Header from "./Header"

function App() {
  

  return (
    <>
    <Header />
      <Routes>
      <Route path="/dash" element={<Dash />}/> 
      <Route path="/signin" element={<Signin />}/>
      </Routes>
    </>
  )
}

export default App
