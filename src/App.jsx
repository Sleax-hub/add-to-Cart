import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <ToastContainer />
    </>
  );
}

export default App;
