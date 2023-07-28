import React from "react";
import { Routes, Route } from "react-router-dom";
import PopupAddressForm from "../Components/PopupAddressForm";
import AddNewAddress from "../Pages/AddNewAddress";
import BillingDetails from "../Components/BillingDetails";
import Payment from "../Pages/Payment";
import AddressDetails from "../Components/AddressDetails";
import OrderPlaced from "../Pages/OrderPlaced";

const Allroutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/addnewaddress" element={<AddNewAddress />} />
        <Route path="/address" element={<PopupAddressForm />} />
        <Route path="/addressdetails" element={<AddressDetails />} />
        <Route path="/billingdetails" element={<BillingDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orderplaced" element={<OrderPlaced />} />
      </Routes>
    </div>
  );
};

export default Allroutes;

