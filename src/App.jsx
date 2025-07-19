import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/products-list/ProductsList";
import getProducts from "./lib/getProducts/getProducts";
import RightButton from "./components/buttons/RightButton";

const App = () => {
  const response = getProducts();
 // console.log(response);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex m-4" id="product-container">
                {response.countries?.slice(0, 4).map((country, index) => {
                  return <ProductsList product={country || {}} key={index} />;
                })}
              </div>
              <RightButton res={response}/>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
