import { Link } from 'react-router-dom';
import './Error.scss';
export default function Error(){
    return(
        <section className='container col-lg-12 m-auto mb-5' id='error'>
            <div className='col-lg-12 text-center'><h1 className='mt-3'>ERROR</h1></div>
            <div className='col-lg-12 text-center  '><h1>404</h1></div>
            <div className='col-lg-12 text-center not'>PAGE NOT FOUND <br/>
                       Go to <a className="" href="/">HOME PAGE</a>
            </div>
            
        </section>
    )
}