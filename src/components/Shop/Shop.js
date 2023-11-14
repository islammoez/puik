import './Shop.css';
// import rare from '../images/5.-Rare-Carafe-R10035-scaled.jpg';
// import puik from '../images/PUIK_2020_Portret_Optiondiner_3_Maartenwillemstein_FrederikRoije-scaled.jpg';
// import puik2 from '../images/Puik-Design_PiDiner_202111_Studiozelden_Richardhutten-scaled.jpg';
// import puik3 from '../images/Puik_2021_Archi_2_StudioZelden_InteriorElements-scaled.jpg';
import Data from "../../Data.json";
import Carde from '../Carde/Carde';

let products = Data;

export function Shop(){
    return(
        <section className="mt-5 container row m-auto">
            {
                products.map((product)=>{
                    return <Carde price={product.price} title={product.title} description={product.description} images={product.images}/>
                })
            }
              {/* <Carde price="50" name="1111111111"   url="4.-Lloyd-Natural-LLN10041-scaled.jpg"/>
              <Carde price="60" name="222222222"    url="5.-Rare-Carafe-R10035-scaled.jpg"/>
              <Carde price="70" name="33333333"     url="PUIK_2020_Portret_Optiondiner_3_Maartenwillemstein_FrederikRoije-scaled.jpg"/>
              <Carde price="80" name="4444444444"   url="Puik_2021_Archi_2_StudioZelden_InteriorElements-scaled.jpg"/>
               */}
        </section>    
    )
}