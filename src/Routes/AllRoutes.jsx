import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopStructure from '../Components/ShopStructure';
import SingleProductPage from '../Components/SingleProductPage';
import CartPage from '../Pages/CartPage';
import HomePage from '../Pages/HomePage';
import Payment from '../Pages/Payment';
import MenPage from '../Pages/Homepage/MenPage';
import PaymentPage2 from '../Pages/PaymentPage2';
import Admin from '../Components/Admin/Admin';
import Dashboard from '../Components/Admin/Dashboard';
import PrivateRoute from './PrivateRoute';
import PleaseLoginPage from '../Pages/PleaseLoginPage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/women" element={<MenPage />} />
      <Route path="/data/:id" element={<SingleProductPage />} />
      <Route
        path="/cartPage"
        element={
          <PrivateRoute>
            <CartPage />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/shop" element={<ShopStructure />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/paymentpage2" element={<PaymentPage2 />}></Route>
      <Route path="*" element={<PleaseLoginPage />} />
    </Routes>
  );
};

export default AllRoutes;
