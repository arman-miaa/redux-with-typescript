import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
      <div className=" ">
          <Navbar />
          <div className="min-h-screen">
              <Outlet/>
          </div>
          <Footer/>
    </div>
  )
}

export default MainLayout