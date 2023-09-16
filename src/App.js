import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Breadcrumb from "./Breadcrum/BreadCrumb";
import Home from "./home";

// const Home = () => {
//   return <h2>Home</h2>;
// };

// const About = () => {
//   return <h2>About</h2>;
// };

// const Contact = () => {
//   return <h2>Contact</h2>;
// };

function App() {
  return (
    <>
    <Home />
    </>
    // <Router>
    //   <div className="App">
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //     <Breadcrumb />
    //   </div>
    // </Router>
  );
}

export default App;
