import './Styles/General.css';
import ProductTypes from './Pages/ProductTypes';
import { Routes, Route } from "react-router-dom";
import Products from './Pages/Products';
import Login from './Pages/Login';
import ProtectedLayout from './Security/ProtectedLayout';
import ProtectedPublicLayout from './Security/ProtectedPublicLayout';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <ProtectedPublicLayout /> }>
          <Route path="login?" element={ <Login /> } />
        </Route>
        <Route path="/" element={ <ProtectedLayout /> }>
          <Route path="productTypes" element={ <ProductTypes /> } />
          <Route path="products/:productType?" element={ <Products /> } />
          <Route path="*" element={ <NotFound /> } />
        </Route>
      </Routes>

    </>
  );
}

export default App;
