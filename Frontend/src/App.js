import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Registration from './components/Registration';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import CategoriesBar from './components/CategoriesBar';
import Gallery from './components/Gallery';
import UserCRUD from './components/UserCRUD';
import ProductCRUD from './components/ProductCRUD';
import Footer from './components/Footer.js';
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CategoriesBar></CategoriesBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin/user-crud" element={<UserCRUD></UserCRUD>} />
          <Route
            path="/admin/products-crud"
            element={<ProductCRUD></ProductCRUD>}
          />
          
          <Route path="/category/:categoryValue" element={<Gallery />} />
        </Routes>
        <ToastContainer autoClose={2000} />
        <Toaster toastOptions={{"duration":3000}}/>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
