import Navbar from './Components/Navbar'
import Projects from './Pages/Projects'
import './App.css'

const App = () => {
  return (
    <div className='px-4 md:px-10'>
      <Navbar/>
      <Projects/>
    </div>
  )
}

export default App