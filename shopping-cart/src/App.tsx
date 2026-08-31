import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Store } from './pages/Store';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <div className="mt-4 mx-auto w-full text-black max-w-7xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
