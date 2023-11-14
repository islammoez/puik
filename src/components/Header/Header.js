import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/Puik-Logo-BLACK.png";
import './Header.css';
import { WOW } from "wowjs";



function header(){
  // Active WoW.js
  const wow = new WOW({ live: false });
  wow.init();
return(
    <nav className="row col-12">
      <h1 className="col-12">header</h1>
      <section className="">
            <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <div className="container-fluid">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <Link className="navbar-brand myfont wow animate__animated animate__fadeInLeft" to="/"><img src={logo}/></Link>
                  <div className="collapse navbar-collapse row" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 col-lg-8 justify-content-end">
                      
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle fs-4" to="/aaa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Project
                            </Link>
                            <ul className="dropdown-menu">
                              <li><Link className="dropdown-item fs-4" to="/aaa">Action</Link></li>
                              <li><Link className="dropdown-item fs-4" to="/aaa">Another action</Link></li>
                              <li><hr className="dropdown-divider fs-4" /></li>
                              <li><Link className="dropdown-item fs-4" to="/aaa">Something else here</Link></li>                             
                            </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle fs-4" to="/aaa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            SHOP
                        </Link>
                        <ul className="dropdown-menu">
                          
                          <li><Link className="dropdown-item fs-5" to="/shop">shop</Link></li> 
                          <li><Link className="dropdown-item fs-4" to="/aaa">Another action</Link></li>
                          <li><hr className="dropdown-divider fs-4" /></li>
                          <li><Link className="dropdown-item fs-4" to="/aaa">Something else here</Link></li>
                        </ul>
                  </li>
                  
                      
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle fs-4" to="/aaa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                professionals
                            </Link>
                            <ul className="dropdown-menu">
                              <li><Link className="dropdown-item fs-4" to="/aaa">Action</Link></li>
                              <li><Link className="dropdown-item fs-4" to="/aaa">Another action</Link></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><Link className="dropdown-item fs-4" to="/aaa">Something else here</Link></li>
                            </ul>
                      </li>
                      <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle fs-4" to="/aaa" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            ABOUT US

                        </Link>
                        <ul className="dropdown-menu">
                          <li><Link  className="dropdown-item fs-5" to="/about">about</Link></li> 
                          <li><Link className="dropdown-item fs-4" to="/aaa">Another action</Link></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><Link className="dropdown-item fs-4" to="/aaa">Something else here</Link></li>
                        </ul>
                  </li>
                    </ul>
                    <form className="d-flex col-lg-3" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />                                        
                    </form>
                    <button className="btn btn-outline-warning col-lg-1" type="button"><i className="fa-solid fa-cart-shopping me-3 hover"><FontAwesomeIcon icon={faCartShopping} /></i>0</button>
                    
                  </div>
                </div>
              </nav>
        </section>  
    </nav>
)
}
export default header ;