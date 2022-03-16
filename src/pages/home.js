import React from 'react';
import OurServices from "../components/ourServices";
import HomeAboutUs from "../components/homeAboutUs";
import Info from "../components/info";
import NewProducts from "../components/newProducts";
import HomeNews from "../components/homeNews";
import HomePartners from "../components/homePartners";

const Home = () => {
    return (
        <div className='position-relative'>
            {/*<Info/>*/}
            <OurServices/>
            <HomeAboutUs/>
            <NewProducts/>
            <HomeNews/>
            <HomePartners/>
        </div>
    );
};
export default Home;
