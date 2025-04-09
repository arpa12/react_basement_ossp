import Navbar from './components/landingPage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/landingPage/Slider';
import Services from './components/landingPage/services';
import Notice from './components/landingPage/Notice';
import Media from './components/landingPage/Media';
import Footer from './components/landingPage/Footer';

function App() {
  return (

    <BrowserRouter>   {/* This MUST be here to support routing */}
    <Navbar />
    <Slider />
    <Services />
      <Notice />
      <Media />
      <Footer />

    
    {/* <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/why" element={<Why />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes> */}
  </BrowserRouter>

  );
}

export default App;
