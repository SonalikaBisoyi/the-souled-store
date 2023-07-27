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
import Membership from '../Pages/Membership';
import About from '../Pages/About';
import Careers from '../Pages/Careers';
import SouledArmy from '../Pages/SouledArmy';

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
         <Route path='/accessories/:subcategory'element={<AccessoriesPage gender={val} />} />      
         <Route path='/membership' element={<Membership/>}></Route>
         <Route path='/About' element={<About/>}></Route>
         <Route path='/Careers' element={<Careers/>}></Route>
         <Route path='/SouledArmy' element={<SouledArmy/>}></Route>
    </Routes>
  )
}


export default AllRoutes;
