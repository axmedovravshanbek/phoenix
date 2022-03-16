import React, {useState} from 'react';
import './styles/global.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import TopNav from "./components/topNav";
import Footer from "./components/footer";
import FContact from "./components/contactUs";
import ProductCatalog from "./pages/ProductCircles";
import NewsPage from "./pages/newsPage";
import PartnersPage from "./pages/partnersPage";
import NewsElement from "./pages/newsFull";
import ProductCategory from "./pages/product10";
import ProductInfo from "./pages/productInfo";
import About from "./pages/about";
import ScrollToTop from "./components/scrollToTop";
import Loading from "./pages/loading";

const App = () => {
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    if (loading) {
        return <Loading/>
    }
    return (
        <div>
            <BrowserRouter>
                <ScrollToTop>
                    <TopNav/>
                    <div className='position-relative pt-5'>
                        <div className='position-absolute top-0 z0 h-100 w-100'>
                            <div className="container lines h-100">
                                <div className="row h-100">
                                    <div className="col-6 bx1 h-100"/>
                                    <div className="col-6 br1 h-100"/>
                                </div>
                            </div>
                        </div>
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/products" element={<ProductCatalog/>}/>
                            <Route path="/products/:category" element={<ProductCategory/>}/>
                            <Route path="/products/:category/:n" element={<ProductInfo/>}/>
                            <Route path="/partners" element={<PartnersPage/>}/>
                            <Route exact path="/news" element={<NewsPage/>}/>
                            <Route exact path="/news/:id" element={<NewsElement/>}/>
                            <Route path="*" element={<h1>404</h1>}/>
                        </Routes>
                        <FContact/>
                    </div>
                    <Footer/>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};
export default App
