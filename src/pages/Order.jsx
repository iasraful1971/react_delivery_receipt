import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiFillPrinter, AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Spinner from "../extra/Spinner";
import firebaseDb from "../firebase/firebase.config";
import Layout from "./Layout";
const Orders = () => {
  const [orderData, setOrderData] =useState([]);
  const history = useNavigate();
  const [search, setSearch]=useState("");
  async function getData(){
    try {
      const usersProductData = await getDocs(collection(firebaseDb, "sumonOrderCollection"));
      const userDataArray = [];
      usersProductData.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        userDataArray.push(obj)
      });
      console.log(userDataArray);
      setOrderData(userDataArray)  

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const deleteData =async (order) => {
    try {
      toast.success("deleted successfully");
      await deleteDoc(doc(firebaseDb, "sumonOrderCollection", order?.id ))
      getData();
    } catch (error) {
      
      console.log(error);
    }
  }

  if(orderData.length === 0){
    return <Spinner/>
  }

  return (
    <Layout>
      <Header />
      <Navbar />
      <div className="row seaerch">
            <div className="col-md-4">
                <h4 className="info-title">Find data by search</h4>
                <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="search items by name"
              className="form-control"
            />
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
        </div>

      {
      orderData
      .filter((obj) => obj?.userData?.name.toLowerCase().includes(search))
      .map((order) => {
       
        const {name , surname, email , address} = order.userData;


        return <div className="order-list">
            <div>
              <h4>Name</h4>
              <p>{name} {surname}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p> {email}</p>
            </div>
            <div>
              <h4>Address</h4>
              <p>{address}</p>
            </div>
            <div>
              <h4>Edit</h4>
              <FaEdit className="edit" />
            </div>
            <div>
              <h4>Delete</h4>
              <AiTwotoneDelete 
              onClick={() => {deleteData(order)}}
               className="delete" />
            </div>
            <div>
           
              <h4 className="printer" >Print</h4>
             
              <AiFillPrinter 
                onClick={() => {
                  history(`/print/${order.id}`);
                }}
              className="print" />
           
            </div>
        </div>

        
      })}
      <Footer />
    </Layout>
  );
};

export default Orders;
