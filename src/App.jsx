import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './pages/HomePage'
import { Provider } from 'react-redux'
import appStore from './components/utils/appStore'
import Feed from './components/Feed'

function App() {
  return (
    <>
    <Provider store={appStore}>
      <BrowserRouter basename='/'>
          <Routes>
              <Route path='/' element={<Body />}>
                  <Route path='/' element={<HomePage />}  />
                  <Route path='/feed' element={<Feed />}  />
                  <Route path='/login' element={<Login />}  />
                  <Route path='/signup' element={<SignUp />}  />
              </Route>
          </Routes>
      </BrowserRouter>
     </Provider>
    </>
  )
}

export default App