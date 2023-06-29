import React from 'react';
import {Link} from 'react-router-dom';
import bg from '../images/bg.webp';

const Cta = () => {
    return ( 
        <div className="w-full flex items-center justify-center text-white cta">
              {/* <img class="rounded-t float-right duration-1000 w-full" src={dashbored} alt="dashbored..." /> */}
              <div className="mx-8 w-full h-96 text-center lg:text-left py-16 px-12 flex lg:justify-between items-center " src={bg} alt="dashbored...">                    
            {/* <img class="rounded-t h-96  w-full " src={bg} alt="dashbored..." /> */}
            </div>
           
        </div>
     );
}
 
export default Cta;