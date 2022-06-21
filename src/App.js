import './App.css';
import Footer from './Components/Footer';
import Error from './Components/Error';
import Home from './Components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Artists from './Components/Artists';
import ArtistDetails from './Components/ArtistDetails';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
               {/* <div className="row g-0">
                 <div className='col-3 p-2'>
                   <SideBar/>
                 </div>
                 <div className='col-9'> */}
                 <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/Home" element={<Home/>}/>
                   <Route path="/Artists" element={<Artists/>}/>
                   <Route path="/Artists/:id" element={<ArtistDetails/>}/>
                   <Route path="Artists/*" element={<Error/>}/>
                   <Route path="*" element={<Error/>}/>
               </Routes>
                 {/* </div>
               </div> */}
               <Footer/>
           </BrowserRouter>
          </div>
  );
}

export default App;
