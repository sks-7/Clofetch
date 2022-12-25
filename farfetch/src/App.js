import Navbar from './Components/Navbar/Navbar';
// import ShopStructure from './Components/ShopStructure';
import { FooterContainer } from './Pages/Footer/containers/footer';
import AllRoutes from "./Routes/AllRoutes"
import PrivateRoute from './Routes/PrivateRoute';
// import HomePage from './Pages/HomePage';
// import DataFetch from './Utils/DataFetch';
// import Admin from './Components/Admin/Admin';
// import Dashboard from './Components/Admin/Dashboard';


function App() {
  return (
    <div>
    {/* <Navbar/> */}
    <AllRoutes/>
    {/* <FooterContainer/> */}
    </div>
  );
}

export default App;
