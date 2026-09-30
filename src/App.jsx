import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MainPage from './pages/MainPage.jsx'

const App = () => {
  return (
    <div className="">

    <BrowserRouter>
     <MainPage/>
     <h1>#16</h1>
    </BrowserRouter>
    </div>
  )
}

export default App