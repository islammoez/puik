import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Error from './components/Error404/Error'
function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<div className="col-12"><Home /></div>}></Route>
          <Route path="/shop" element={<div className="col-12"><Shop /></div>}></Route>
          <Route path="/about" element={<div className="col-12"><About /></div>}></Route>
          <Route path="/*" element={<div className="col-12"><Error /></div>}></Route>
        </Routes>
        <Outlet />
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
