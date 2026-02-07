import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import PricingPage from "./components/PricingPage"
import SignInPage from "./components/SignInPage"


function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/pricing' element={<PricingPage/>}/>
      <Route path='/sign-in' element={<SignInPage/>}/>
    </Routes>
  )
}

export default App