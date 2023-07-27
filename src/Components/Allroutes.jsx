import React from "react";
import { Routes, Route } from "react-router-dom";
import PopupAddressForm from "../Components/PopupAddressForm";
import AddNewAddress from "../Pages/AddNewAddress";
import BillingDetails from "../Components/BillingDetails";
import Payment from "../Pages/Payment";
import AddressDetails from "../Components/AddressDetails";
import CartPage from "../Pages/CartPage";

const Allroutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/address" element={<PopupAddressForm />} />
        <Route path="/addressdetails" element={<AddressDetails />} />
        <Route path="/addnewaddress" element={<AddNewAddress />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
};

export default Allroutes;


