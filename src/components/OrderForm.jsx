import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../extra/Spinner";
import firebaseDb from "../firebase/firebase.config";

const OrderForm = () => {

  // persons 
const [name , setName] =useState("");
const [surname , setSurname] =useState("");
const [email , setEmail]=useState("");
const [phone , setPhone] =useState("");
const [address, setAddress] =useState("");
const [district, setDistrict]=useState("");
const [upozela , setUpozela] =useState("");
const [zip, setZip]=useState("");

// product
const [productId, setProductId]=useState("");
const [productName, setProductName]= useState("");
const [productQuantity, setProductQuantity]=useState("")
const [category , setCategory] =useState("");
const [price, setPrice] =useState("");
const [shipping , setShipping] =useState("");

//date

const [orderDate, setOrderDate] =useState("");
const [receivedDate, setReceivedDate] =useState("");
const [loading, setLoading]=useState(false);
const handleData = async() => {
  const userData = {
    name , surname, email , phone , address, district, upozela, zip, productId, productName, productQuantity , category, price, shipping, orderDate, receivedDate
  }
  const userDataInfo ={
    userData
  }
  try {
    setLoading(true)
    const result = await addDoc(collection(firebaseDb, "sumonOrderCollection"), userDataInfo)
    toast.success("data submitted successfully");
    setName("")
    setSurname("")
    setEmail("");
    setPhone("");
    setAddress("");
    setDistrict("");
    setUpozela("");
    setZip("");
    setProductId("");
    setProductName("");
    setProductQuantity("");
    setCategory("");
    setPrice("");
    setShipping("");
    setOrderDate("");
    setReceivedDate("");
    setLoading(false)
  } catch (error) {
    toast.error("there was something error");
    setLoading(true)
  }
}
if(loading){
  return <Spinner/>
} else{
  return (
    <div className="order">
      <marquee className="scroll-text" width="100%" direction="right">
        Fill up all the required user information and orders details correctly.
      </marquee>
      <div className="order-form">
        <h5 className="order-text">User Information</h5>
        <form>
          <div className="row">
            <div className="col-md-6">
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
                id="name"
                name="name"
                type="text"
                placeholder="First name"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                id="surname"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="last name"
                className="form-control"
              />
            </div>
          </div>
          <div className="row mt-1">
            <div className="col-md-6">
            <input
                id="surname"
                name="surname"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="form-control"
              />
            </div>
            <div className="col-md-6">
              <input
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="number"
                placeholder="Mobile number"
                className="form-control"
              />
            </div>
          </div>
          <div className="row my-1">
            <div className="col-md-12">
              <input
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                className="form-control"
                placeholder="address"
              />
            </div>
          </div>

          <div className="row mb-1">
            <div className="col-md-5">
              <input
                id="district"
                name="district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                type="text"
                placeholder="District"
                className="form-control"
              />
            </div>
            <div className="col-md-4">
              <input
                id="upozela"
                name="upozela"
                value={upozela}
                onChange={(e) => setUpozela(e.target.value)}
                type="text"
                placeholder="Upazila"
                className="form-control"
              />
            </div>
            <div className="col-md-3">
              <input
                id="zip"
                name="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                type="number"
                placeholder="Zip"
                className="form-control"
              />
            </div>
          </div>
          <h5 className="order-text pt-3">Products Information</h5>

          <div className="row">
            <div className="col-md-3">
              <input
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                type="number"
                className="form-control"
                placeholder="product id"
              />
            </div>
            <div className="col-md-5">
              <input
                id="productName"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                type="text"
                className="form-control"
                placeholder="product name"
              />
            </div>
            <div className="col-md-4">
              <input
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Category"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <input
                id="productQuantity"
                name="productQuantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                type="number"
                className="form-control"
                placeholder="product quantity"
              />
            </div>
            <div className="col-md-4">
              <input
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="number"
                className="form-control"
                placeholder="price"
              />
            </div>
            <div className="col-md-4">
              <input
                id="shipping"
                name="shipping"
                value={shipping}
                onChange={(e) => setShipping(e.target.value)}
                type="number"
                className="form-control"
                placeholder="Shipping Charge"
              />
            </div>
          </div>
          <h5 className="order-text pt-3">Delivery Information</h5>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="delivery">Order Delivery</label>
              <input
                id="orderDate"
                name="orderDate"
                value={orderDate}
                onChange={(e) => setOrderDate(e.target.value)}
                type="date"
                className="form-control"
                placeholder="ordered date"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="delivery">Received Delivery</label>
              <input
                id="receivedDate"
                name="receivedDate"
                value={receivedDate}
                onChange={(e) => setReceivedDate(e.target.value)}
                type="date"
                className="form-control"
                placeholder="delivery date"
              />
            </div>
          </div>
          <div className="submit">
            <button onClick={handleData} type="button">Submit data</button>
          </div>
        </form>
      </div>
    </div>
  );
};
}

export default OrderForm;
