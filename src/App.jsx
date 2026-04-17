import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
     <BrowserRouter basename='/'>
        <Routes>
            <Route path='/' element={<Body />}>
                <Route path='/' element={<HomePage />}  />
                <Route path='/login' element={<Login />}  />
                <Route path='/signup' element={<SignUp />}  />
            </Route>
        </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App