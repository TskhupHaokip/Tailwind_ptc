import SideBar from "./componenets/common/SideBar"
import Topbar from "./componenets/common/Topbar"
import Home from "./pages/Home"


function App() {
  
  return (
    <div  className="flex flex-x flex-col min-h-screen h-dvh bg-base-300">
      <Topbar/>
      <SideBar />
      <Home />
    </div>
  )
}

export default App

