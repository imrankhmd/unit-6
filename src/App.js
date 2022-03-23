import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {
  Route,
  Routes
} from "react-router-dom";
import { About } from './components/About';
import { ProductsDashboard } from './components/ProductsDashboard';
import { Home } from './components/Home';
import { SingleProduct } from './components/SingleProduct';



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/movies' element={<ProductsDashboard />} />
        <Route path='/movies/:id' element={<SingleProduct />} />
      </Routes>

    </div>
  );
}

export default App;
