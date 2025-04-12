import Home from "./Components/Home";
import About from "./Components/About";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Master from "./Components/Master/Master";
import NotFound from "./Components/NotFound";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import AddMenu from "./Components/AddMenu";
function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Master/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/addmenu" element={<AddMenu/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
   <Route path="/*" element={<NotFound/>} ></Route>
   </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
