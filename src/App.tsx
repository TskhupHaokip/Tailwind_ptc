import SideBar from "./componenets/common/SideBar"
import Topbar from "./componenets/common/Topbar"
import Home from "./pages/Home"


function App() {
  
  return (
    <div  className="min-h-screen bg-base-300">
      <Topbar/>
      <SideBar />
      <Home />
    </div>
  )
}

export default App

