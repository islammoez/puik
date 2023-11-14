import './footer.css';

export default function Footer(){
    return(
        <section className="container m-auto border-top row  mb-5">
            
        <div className="col-lg-3">
          <h5 className="myfonth my-4 ">CONTACT</h5>
          <p className="mb-0">Puik Design BV</p>
          <a href="#">info@puikdesign.nl</a>
          <p>+316 47161911</p>
        </div>
        <div className="col-lg-3">
        <h5 className="myfonth my-4">PRODUCTS</h5> 
            <a href="">SEATING</a><br/>
            <a href="">TABLES</a><br/>
           <a href="">LIGHTING</a> <br/>
            <a href="">ACCESSORIES</a><br/>
           <a href="">COLLECTIONS</a> 
        </div>
        <div className="col-lg-3">
          <h5 className="myfonth my-4">ABOUT US</h5>            
          <a href="">CONTACT</a><br/>
          <a href="">THE FOUNDERS</a><br/>
          <a href="">STORE LOCATOR</a><br/>
          <a href="">CAREERS</a><br/>
          <a href="">SUSTAINABILITY</a>           
        </div>          
        <div className="col-lg-3">
          <h5 className="myfonth my-4">FAQ</h5>
          <a href="">SHIPPING & RETURNS</a><br/>
          <a href="">PAYMENT & BILLING</a><br/>
          <a href="">PRIVACY POLICY</a><br/>
          <a href="">RIGHT OF WITHDRAWAL</a><br/>
          <a href="">TERMS AND CONDITIONS</a>
        </div>
        </section>
    )
}