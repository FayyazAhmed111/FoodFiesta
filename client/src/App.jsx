import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Cart from './pages/Cart/Cart';
import { useEffect, useRef, useState } from 'react';
import Overlay from './components/Overlay';

function App() {
  const [mobileNav, setMobileNav] = useState(false);

  const [dishes, setDishes] = useState([])

  useEffect(() => {
    document.body.className = mobileNav ? 'overflow-visible' : '';
  }, [mobileNav]);


  const fetchDishes = async () => {
    const response = await fetch('/menu.json');
    const data = await response.json();
    console.log(data.menu);
  }
  useEffect(() => {
    fetchDishes()
  }, [])


  return (
    <>
      {mobileNav && <Overlay />}
      <Navbar mobileNav={mobileNav} setMobileNav={setMobileNav} />
      <div className={`min-h-screen`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
