import { Route, Routes } from "react-router"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"

const AppRoutes = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<MainLayout />}>
                  <Route index element={<Home/>} />
                  
              </Route>
          </Routes>
    </div>
  )
}

export default AppRoutes