
import './App.css'
import Header from './Header'
import Card from './Card'

function App() {

  return (
    <div> 
    <div className="container fixed top-0 left-0 right-0 z-50">
       <Header />
    </div>
      <div className='container mx-auto mt-20 px-5 py-50'> 
        <Card />
      </div>
      </div>

  )
}

export default App
