import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/cart" element={<CartPage/>}/>
      <Route path="/product/:id" element={<ProductDetails/>}/>
      {/* other unknown routes 404 fallback */}
      <Route path="*" element={<div className="p-4">Page not found</div>} />
    </Routes>
    
      
      <ToastContainer />
    </>
  );
}

export default App;
