import React from 'react'
import Navbar from './navbar/Navbar'
import Themes from './themes/Themes'
import { Outlet } from "react-router"
const AppLayout = () => {
    return<>
<Navbar></Navbar>
<Outlet></Outlet>
<Themes></Themes>
  </>
}

export default AppLayout