import Contact from "./Components/Contact"
import EventCarousel from "./Components/EventCarousel"
import Footer from "./Components/Footer"
import Founders from "./Components/Founders"

function App() {
  return (
    <div className="m-0 p-0 box-border">
      <Founders/>
      <EventCarousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
