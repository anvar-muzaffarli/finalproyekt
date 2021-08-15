import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Particles from 'react-particles-js'
//komponentler olan hisse
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Particles
        params={{
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          }

        }}

      />
      <Navbar />
      <Header />
      <About />
      <Services />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
