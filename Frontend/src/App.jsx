import Home from "./Components/Home";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Master from "./Components/Master/Master";
import NotFound from "./Components/NotFound";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register copy";
function App() {
  return (
    <>
    <BrowserRouter>
   <Routes>
   <Route path="/" element={<Master/>}>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>
   <Route path="/*" element={<NotFound/>} ></Route>
   </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
