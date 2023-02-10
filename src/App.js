import './App.css';
import { MantineProvider } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import Nav from './layout/globalComponents/Nav';
import Home from './layout/globalComponents/Home';
import About from './layout/globalComponents/AboutMe';
import Contact from './layout/globalComponents/Contact';
import Data from './layout/Data';

function App() {
  return (
    <>
      <MantineProvider>
        <Nav/>
        <Home/>
        <About/>
        <Contact/>
      </MantineProvider>

      {/* <Data /> */}
    </>
  );
}

export default App;
