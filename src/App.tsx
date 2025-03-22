import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/nav-bar';
import ProductsPage from './components/pages/products';
import SingleProduct from './components/organisms/single-product';
import Paths from './shared/paths';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={Paths.home} element={<>Home page coming soon!</>} />
        <Route path={Paths.products} element={<ProductsPage />} />
        <Route path={Paths.singleProduct} element={<SingleProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
