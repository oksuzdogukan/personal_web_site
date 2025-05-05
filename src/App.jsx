import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import TechSkills from './components/TechSkills'
import MyProjects from './components/MyProjects'
import Footer from './components/Footer'

function App() {



  //https://www.balyusuf.com/#  bak buraya

  return (
    <div className='App'>
      {/* Header */}
      <Header />
      {/* About Me */}
      <AboutMe />

      <div className="up-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-down h-6 w-6 text-muted-foreground"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
      </div>

      {/* Tech Skills */}
      <TechSkills/>
      {/* My Projects */}
      <MyProjects/>
      {/* Footer */}
      <Footer/>
   </div>
  )
}

export default App
