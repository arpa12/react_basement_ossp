import Navbar from './components/landingPage/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slider from './components/landingPage/slider';

function App() {
  return (

    <BrowserRouter>   {/* This MUST be here to support routing */}
    <Navbar />
    <Slider />
    
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
