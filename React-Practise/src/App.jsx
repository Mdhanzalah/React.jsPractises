import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from"./components/Navbar";
import Home from"./components/Home";
import Login from"./components/Login";
import Course from"./components/Course";
import Footer from "./components/Footer";
import Product from"./components/Product";
import Clock from "./components/Clock";
function App(){
  return(
    
<>

<Navbar/>
<Routes>
 <Route path="/" element={<Home/>} />
 <Route path="/Login" element={<Login/>} />
 <Route path="/Course" element={<Course/>}/>
 <Route path="/Product/:name" element={<Product/>}/>
 <Route  path="/Clock" element={<Clock />}/>
 </Routes> 
 
 <Footer/>
</>
  )
}
export default App;