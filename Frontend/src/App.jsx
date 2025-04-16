import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Master from "./Components/Master/Master";
import NotFound from "./Components/Pages/NotFound";
import About from "./Components/Pages/About";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AddMenu from "./Components/Pages/AddMenu";
import { ContextProvider } from "./Components/Context/Context";
import Home from "./Components/Pages/Home";
import Menu from "./Components/Pages/Menu";
import Order from "./Components/Pages/Order/Order";
function App() {
  return (
    <ContextProvider>
          <ToastContainer position="top-right" autoClose={3000}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master/>}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/addmenu" element={<AddMenu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order/:userId/:productId" element={<Order />} />

          </Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
