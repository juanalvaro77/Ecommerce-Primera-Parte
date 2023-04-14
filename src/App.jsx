import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import NavSection from "./components/Navbar"
import Home from './pages/Home'
import Login from "./pages/Login"
import ProductDetail from './pages/ProductDetail'
import Purchases from "./pages/Purchases"
import ProtectedRoutes from './components/ProtectedRoutes'
function App() {

  return (
    <HashRouter>
      <div className="App">
        <NavSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail/>}/>
          <Route path="/login" element={<Login/>}/>
          
          <Route element={<ProtectedRoutes/>}>
            <Route path="/purchases" element={<Purchases/>}/>
          </Route>
        </Routes>     
      </div>
    </HashRouter>
  )
}

export default App

