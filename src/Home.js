import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
 <div className="home__row">
          <Product id="11223344" title="Maradona #10 Argentina Home Long Sleeve Soccer Jersey- 2018/19" price={499.99} image='https://m.media-amazon.com/images/I/71PLZJ-WbaL._AC_UX522_.jpg' rating={5} />
          <Product id="22334455" title="MUSSU Brazil Team Neymar #10 Soccer Jersey-Brasil Short Sleeve Jersey" price={349.99} image='https://m.media-amazon.com/images/I/71gVbgJnT+S._AC_UX679_.jpg' rating={2} />          
        </div>

        <div className="home__row">
        <Product id="122304" title="Official Lionel Messi FC Barcelona Soccer Action Figure, 4.5” H x 3.5” W x 1.5” D" price={99.99} image='https://m.media-amazon.com/images/I/71t65CWqAbL._AC_SX679_.jpg' rating={4} />
        <Product id="12314234" title="POP! Football: PSG: Neymar Jr. Vinyl Figure Standard" price={149.99} image='https://m.media-amazon.com/images/I/61nEZ7eCvxL._AC_SX679_.jpg' rating={4}/>
        <Product id="789123" title="GEVINST Madrid Football Stadium Building Kit, Famous Architectural Displayable Model for Adults and Collector Toy, New 2022" price={1649.99} image='https://m.media-amazon.com/images/I/71btYtZrFNL._AC_SL1500_.jpg' rating={5}/>
        </div>

        <div className="home__row">
        <Product id="123490101" title="adidas Men's Boca Juniors Seasonal Special Long Sleeve Tee" price={347.98} image='https://m.media-amazon.com/images/I/61cqo4cC1QL._AC_UX466_.jpg' rating={5} />
            </div>
        </div>
    
     </div>
  );
}

export default Home;