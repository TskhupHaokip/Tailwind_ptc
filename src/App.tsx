import SideBar from "./componenets/common/SideBar"
import Topbar from "./componenets/common/Topbar"
import {AuthProvider} from "./context/AuthContext"
import Home from "./pages/Home"
import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import PageNotFound from "./pages/PageNotFound"
import RegisterPage from "./pages/RegisterPage"

const pages = {
  home: Home,
  login: LoginPage,
  "register":RegisterPage
};


function App() {
  const [page,setPage] = useState("home") ;
  const Current_page = pages[page as keyof typeof pages] || PageNotFound ;

  return (

  <AuthProvider>
    <div  className="flex flex-x flex-col min-h-screen h-dvh bg-base-300">
      
      <Topbar setPage={setPage}/>
      <SideBar setPage={setPage}/>
      <Current_page setPage={setPage}/>
    </div>
  </AuthProvider>
  )
}

export default App

