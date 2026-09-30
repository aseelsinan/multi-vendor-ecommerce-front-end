import { Outlet } from "react-router-dom"
import Header from "./common/1-Header/Header"
import Footer from "./common/2-footer.jsx/Footer"

const Layout = () => {
  return (
    <div className="w-100 min-vh-100 bg-transparent d-flex flex-column">
        <Header/>
       <main className="flex-grow-1">
        <Outlet /> 
      </main>
    <Footer/>
        </div>
  )
}

export default Layout