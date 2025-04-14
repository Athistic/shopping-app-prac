import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/molecules/nav-bar';
import ProductsPage from './components/pages/products';
import SingleProduct from './components/organisms/single-product';
import Paths from './shared/paths';
import Breadcrumbs from './components/molecules/bread-crumb';
import Test from './components/organisms/test';
import { SkeletonTheme } from 'react-loading-skeleton';

function App() {
  return (
    <SkeletonTheme>
      <Router basename="/shopping-app-prac">
        <Breadcrumbs />
        <Navbar />
        <Routes>
          <Route path={Paths.home} element={<>Home page coming soon!!</>} />
          <Route path={Paths.products} element={<ProductsPage />} />
          <Route path={Paths.singleProduct} element={<SingleProduct />} />
          <Route path={Paths.test} element={<Test />} />
        </Routes>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
