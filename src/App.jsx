import'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Fitnessgoal from './components/Fitnessgoal'
import Bestoffers from './components/Bestoffers'
import Services from './components/Services'
import Bestplan from './components/Bestplan'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer';
import Signup from './components/Signup';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Signup></Signup>
      <Hero></Hero>
      <Fitnessgoal></Fitnessgoal>
      <Bestoffers></Bestoffers>
      <Services></Services>
      <Bestplan></Bestplan>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </>
  )
}

export default App
