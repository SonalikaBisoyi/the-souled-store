import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Kids from '../Pages/Kids';
import Mens from '../Pages/Mens';
import Womens from '../Pages/Womens';
import TopwearPage from '../Pages/TopwearPage'; 
import Bottomwear from '../Pages/Bottomwear';
import BasicsPage from '../Pages/BasicsPage'; 
import CollectionsPage from '../Pages/CollectionsPage'; 
import AccessoriesPage from '../Pages/AccessoriesPage';
import SingleProductPage from '../Pages/SingleProductPage';
import CartPage from '../Pages/CartPage';
import Login from '../Pages/LoginPage';
import Register from '../Pages/Register';
import AddNewAddress from '../Pages/AddNewAddress';
import Payment from '../Pages/Payment';
import Membership from '../Pages/Membership';
import About from '../Pages/About';
import Careers from '../Pages/Careers';
import SouledArmy from '../Pages/SouledArmy';

import ManageOrderPage from '../Pages/ManageOrderPage';

import Tc from '../Pages/Tc';
import Privacy from '../Pages/Privacy';
import AdminLogin from '../Pages/AdminLogin';
import AdminPage from '../Pages/AdminPage';

const AllRoutes = ({ val }) => {
  return (
    <Routes>
         <Route path='/'  element={<Home/>}></Route>
         <Route path='/mens' element={<Mens/>}></Route>
          <Route path='/womens'  element={<Womens/>}></Route>
         <Route path='/kids'  element={<Kids/>}></Route>
         <Route path='/topwear/:subcategory'element={<TopwearPage gender={val} />} />
         <Route path='/bottomwear/:subcategory'element={<Bottomwear gender={val} />} />
         <Route path='/basics'element={<BasicsPage gender={val} />} /> 
         <Route path='/collections/:collection'element={<CollectionsPage gender={val} />} /> 
    
         <Route path='/topwear/:subcategory/:productId'element={<SingleProductPage />} />  
         <Route path='/bottomwear/:subcategory/:productId'element={<SingleProductPage />} />  
         <Route path='/basics/:productId'element={<SingleProductPage />} />  
         <Route path='/accessories/:subcategory/:productId'element={<SingleProductPage />} /> 
         <Route path='/collections/:category/:productId'element={<SingleProductPage />} />   
         <Route path='/cart' element={<CartPage/>}></Route> 
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/register' element={<Register/>}></Route>
         <Route path='/addnewaddress' element={<AddNewAddress/>}></Route>
         <Route path="/payment" element={<Payment />} /> 
         <Route path='/accessories/:subcategory'element={<AccessoriesPage gender={val} />} />      
         <Route path='/membership' element={<Membership/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         <Route path='/Careers' element={<Careers/>}></Route>
         <Route path='/SouledArmy' element={<SouledArmy/>}></Route>

         <Route path='/ManageOrderPage' element={<ManageOrderPage/>}></Route>

         <Route path='/Tc' element={<Tc/>}></Route>
         <Route path='/Privacy' element={<Privacy/>}></Route>
        <Route path='/adminlogin' element={<AdminLogin/>}></Route>
         <Route path='/admin' element={<AdminPage/>}></Route>

    </Routes>
  )
}


export default AllRoutes;
