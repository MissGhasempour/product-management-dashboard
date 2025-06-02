import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/products-list/ProductsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" elements={<ProductsList />} />
      </Routes>
    </Router>
  );  
};

export default App;
