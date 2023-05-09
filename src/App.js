
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './Pages/Landing';
import BusinessListing from './Pages/BusinessListing';
import BusinessResources from './Pages/BusinessResources';
import History from './Pages/History';
import IncentivePrograms from './Pages/InventivePrograms';
import Involvement from './Pages/Involvement';
import PhotoGallery from './Pages/PhotoGallery';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="businesslisting" element={<BusinessListing/>} />
        <Route path="businessresources" element={<BusinessResources/>} />
        <Route path="history" element={<History/>}/>
        <Route path="incentiveprograms" element={<IncentivePrograms/>} />
        <Route path="involvement" element={<Involvement/>} />
        <Route path="photogallery" element={<PhotoGallery/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
