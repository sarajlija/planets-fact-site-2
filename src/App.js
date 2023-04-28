import "./App.css"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Mercury from "./pages/PlanetMercury/Mercury"
import Header from "./components/Header"
import Earth from "./pages/PlanetEarth/Earth.js"
import Venus from "./pages/PlanetVenus/Venus.js"
import Jupiter from "./pages/PlanetJupiter/Jupiter.js"
import Neptune from "./pages/PlanetNeptune/Neptune.js"
import Uranus from "./pages/PlanetUranus/Uranus.js"
import Saturn from "./pages/PlanetSaturn/Saturn"
import Mars from "./pages/PlanetMar/Mars"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleWindowResize)

    return () => {
      window.removeEventListener("resize", handleWindowResize)
    }
  })
  console.log(windowWidth)
  return (
    <main className="h-100">
      <Header windowWidth={windowWidth} />
      <hr className="text-light my-0 " />
      {/*<Planets />*/}

      <Routes>
        <Route path="/" element={<Mercury />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptune" element={<Neptune />} />
      </Routes>
    </main>
  )
}

export default App
