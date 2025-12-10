import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import MyProjects from './components/MyProjects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <AboutMe />
        <TechSkills/>
        <MyProjects/>
      </main>
      <Footer/>
   </div>
  )
}

export default App
