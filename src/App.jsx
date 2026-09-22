import { ToastContainer } from "react-toastify"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import ExploreTechnologies from "./components/Explore-technologies"
import { Suspense } from "react"
import "react-toastify/dist/ReactToastify.css";


function App() {


  return (
    <>
    <Navbar/>
    <Banner/>
   <Suspense fallback={<p>Loading Technologies.............</p>}>
 <ExploreTechnologies/>
   </Suspense>
   

<ToastContainer />

    </>
  )
}

export default App
