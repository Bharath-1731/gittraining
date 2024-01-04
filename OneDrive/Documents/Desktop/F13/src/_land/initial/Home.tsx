import Navbar from "../../components/inpage/Navbar"
import Hero from "../../components/inpage/Hero"
import Features from "../../components/inpage/Features"
import About from "../../components/inpage/About"
import Team from '../../components/inpage/Team'
import Footer from "../../components/inpage/Footer"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div id="home">
          <Hero/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="features">
          <Features/>
        </div>
        <div id="team">
          <Team/>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home