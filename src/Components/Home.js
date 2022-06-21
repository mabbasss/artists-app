import { Link } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-transition-group';
import { useState } from "react";

import './Home.css'

let Home=()=>{
    const [bgOpacity, setBgOpacity] = useState(0.6)
    const appStyles={
        opacity:`${bgOpacity}`
      }
      
        return(
        <div className='mainPage'>
            <div style={appStyles} className='filter d-flex align-items-center justify-content-center'>
                <Link
                 onMouseEnter={() => setBgOpacity(0.3)}
                 onMouseLeave={() => setBgOpacity(0.6)}
                className="entryBtn" to='/Artists' >Music Db</Link>
           </div>
        </div>
        
    )
}

export default Home;