import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Particles from 'react-particles-js'

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
    </>
  );
}

export default App;
