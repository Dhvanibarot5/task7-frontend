import './App.css'
import BookDisplay from './components/BookDisplay'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {

  return (
    <>
      <Header/>
      <HeroSection/>
      <BookDisplay/>
      <Footer/>
      <Login/>
      <Signup/>
    </>
  )
}

export default App
