import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import OrderForm from '../components/OrderForm';
import Layout from './Layout';

const Home = () => {
    return (
        <Layout>
            <Header/>
            <Navbar/>
            <OrderForm/>
            <hr />
            <Footer/>
        </Layout>
    );
};

export default Home;