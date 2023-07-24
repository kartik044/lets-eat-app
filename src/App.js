
import './App.css';

import  { BrowserRouter,Routes, Route}  from "react-router-dom"
import Home from "./components/Home";
import Productdetail from './components/Productdetail';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from "./components/cart"
import { Provider } from 'react-redux'; 
import store from './utils/Store';
import {Toaster} from  "react-hot-toast"


 

function App() {
  
  return (
   <Provider store={store}>
   <BrowserRouter>
    <Header/>
   <Routes>
    <Route  path='/' element={<Home/>}/>
    <Route exact path='/restaurants/:resId' element={<Productdetail />}/>
    <Route  path='/Cart' element={<Cart/>}/>

   </Routes>
   <Footer/>
   </BrowserRouter>
   <Toaster/>
   </Provider>
   
   
  );
}

export default App;
