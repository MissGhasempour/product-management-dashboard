import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/products-list/ProductsList";
import getData from "./lib/getData/getData";

const App = () => {
  const response = getData();
  console.log(response)
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="flex">
              {response.countries.map((country, index) => {
                if (index == 7) return;
                return <ProductsList data={response} />;
              })}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
