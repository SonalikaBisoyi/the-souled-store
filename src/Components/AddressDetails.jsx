import React from "react";
const AddressDetails = ({ addressDetails, handleEditClick, handleRemoveClick }) => {
  return (
    <div>
      <p>{addressDetails.firstName} {addressDetails.lastName}</p>
      <p>{addressDetails.houseNo}</p>
      <p>{addressDetails.street}</p>
      <p>{addressDetails.postalCode} {addressDetails.city}</p>
      <p>{addressDetails.mobileNumber}</p>
    </div>
  );
};

export default AddressDetails;
