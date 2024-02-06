import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import Skills from '../Skills'
import './index.scss'


const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <Skills />
      <div className="page">
        <Outlet />
      </div>

    </div>

  )
}

export default Layout
