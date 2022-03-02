import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../extra/Spinner";
import firebaseDb from "../firebase/firebase.config";
import bar from "../images/bar.png";
import logo from "../images/logo-1.png";
import sign from "../images/sign.png";
import Layout from "./Layout";
const Print = () => {
  const params = useParams();
  const [orderData, setOrderData] = useState();
  const [loading , setLoading]=useState(false);
  async function getData() {
    try {
      setLoading(true)
      const orderInfo = await getDoc(
        doc(firebaseDb, "sumonOrderCollection", params.orderId)
      );

      console.log(orderInfo.data());
      setOrderData(orderInfo.data());
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if(loading){
    return <Spinner/>
  }
  else{
  return (
    <div className="print-size">
      <Layout>
        <div className="row-header">
          <div className="col-md-4">
            <h2>Delivery Receipt</h2>
            <p>Every customer is our capital.</p>
          </div>
          <div className="col-md-4 flex-img">
           <Link to="/">
           <img src={logo} className="img-fluid" alt="" />
           </Link>
          </div>
          <div className="col-md-4 flex-end">
            <h6>A unique service ltd</h6>
            <address>Muhammadpur, Dhaka, Bangladesh</address>
          </div>
        </div>

        {orderData && (
          <div className="information__container">
            <h3 className="info-title">Customer Information</h3>
            <div className="row">
              <div className="col-md-6 info-text">
                <p>
                  Name :{" "}
                  <span>
                    {orderData?.userData?.name} {orderData?.userData?.surname}
                  </span>{" "}
                </p>
                <p>
                  Email : <span>{orderData?.userData?.email}</span>{" "}
                </p>
                <p>
                  Phone No. : <span>{orderData?.userData?.phone}</span>
                </p>
                <p>
                  Address : <span>{orderData?.userData?.address}</span>
                </p>
              </div>
              <div className="col-md-6 info-text">
                <p>
                  District : <span> {orderData?.userData?.district} </span>{" "}
                  Thana : <span> {orderData?.userData?.upozela}</span>{" "}
                </p>

                <p>
                  PostCode : <span>{orderData?.userData?.zip}</span>{" "}
                </p>

                <p>
                  Order Date : <span>{orderData?.userData?.orderDate} </span>
                </p>
                <p>
                  Delivery Received Date :{" "}
                  <span> {orderData?.userData?.receivedDate}</span>
                </p>
              </div>
            </div>

            <h3 className="info-title">Product Information</h3>
            <div className="row">
              <div className="col-md-4 info-text">
                <p>
                  Product ID : <span>{orderData?.userData?.productId}</span>
                </p>
              </div>
              <div className="col-md-4 info-text">
                <p>
                  Product Name :{" "}
                  <span>{orderData?.userData?.productName} </span>
                </p>
              </div>
              <div className="col-md-4 info-text">
                <p>
                  Category : <span>{orderData?.userData?.category}</span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 info-text">
                <p>
                  Product Quantity :{" "}
                  <span>{orderData?.userData?.productQuantity}</span>
                </p>
              </div>
              <div className="col-md-4 info-text">
                <p>
                  Product Price : <span>{orderData?.userData?.price} </span>
                </p>
              </div>
              <div className="col-md-4 info-text">
                <p>
                  Shipping Cost : <span>{orderData?.userData?.shipping}</span>
                </p>
              </div>
            </div>
            <div className="border"></div>
            <div className="row py-3">
              <div className="col-md-4 info-text">
                  <p>Calculation</p>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4 info-text">
                <p>
                  Total:{" "}
                  {parseFloat(
                    orderData?.userData?.price + orderData?.userData?.shipping
                  )}
                </p>
              </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-6 info-text">
                    <p>Signature</p>
                    <img src={sign} alt="" className="img-fluid sign" />
                    <p>Officer,and Managing Director of Unique LtD Branch , Muhammadpur, Dhaka Bangladesh.</p>
                </div>
                <div className="col-md-6 mt-4 flex-end">
                    <img style={{width:'50%'}} src={bar} alt="" className="img-fluid" />
                </div>
            </div>
          </div>
        )}
      </Layout>
    </div>
  );
};
}
export default Print;
