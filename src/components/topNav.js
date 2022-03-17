import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {xStore} from "../js/mobxStore";
import {observer} from 'mobx-react-lite'
import {lang} from "../js/lang";
import LangSelector from "./langSelector";
import {Divide as Hamburger} from 'hamburger-react'

const TopNav = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='bb1 position-fixed top-0 w-100 bg-white' style={{zIndex: 10}}>
            <div className={`menu ${isOpen ? 'open' : ''}`}>
                <div className="container py-4">
                    <div className="row">
                        <div className='col-6 mb-4'>
                            <Link to='/about' onClick={() => setOpen(false)} className='me-5 circle'>
                                <h4 className='bold text-center px-3 text-white'>{lang.aboutCompany[xStore.lang]}</h4>
                            </Link>
                        </div>
                        <div className='col-6 mb-4'>
                            <Link to='/products' onClick={() => setOpen(false)} className='me-5 circle'>
                                <h4 className='bold text-center px-3 text-white'>{lang.products[xStore.lang]}</h4>
                            </Link>
                        </div>
                        <div className='col-6 mb-4'>
                            <Link to='/partners' onClick={() => setOpen(false)} className='me-5 circle'>
                                <h4 className='bold text-center px-3 text-white'>{lang.ourPartners[xStore.lang]}</h4>
                            </Link>
                        </div>
                        <div className='col-6 mb-4'>
                            <Link to='/news' onClick={() => setOpen(false)} className='me-5 circle'>
                                <h4 className='bold text-center px-3 text-white'>{lang.news[xStore.lang]}</h4>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="d-flex position-absolute bottom-0">
                    <div className="corner"/>
                    <div className="corner right"/>
                </div>
            </div>
            <div className='container bx1'>
                <div className="row">
                    <div className="my-3 col-6 col-lg-3">
                        <Link to='/'>
                            <img
                                src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356448/phoenix/zhpmtepvrsyjegikwjmj.svg'
                                alt=""/>
                        </Link>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center col-lg-9">
                        <div className='d-flex align-items-center'>
                            <div className='desk d-lg-flex'>
                                <Link to='/about' className={`me-5 text-hover ${xStore.pathname==='about'?'active-link':''}`}>
                                    <h5>{lang.aboutCompany[xStore.lang]}</h5>
                                </Link>
                                <Link to='/products' className={`me-5 text-hover ${xStore.pathname==='products'?'active-link':''}`}>
                                    <h5>{lang.products[xStore.lang]}</h5>
                                </Link>
                                <Link to='/partners' className={`me-5 text-hover ${xStore.pathname==='partners'?'active-link':''}`}>
                                    <h5>{lang.ourPartners[xStore.lang]}</h5>
                                </Link>
                                <Link to='/news' className={`me-5 text-hover ${xStore.pathname==='news'?'active-link':''}`}>
                                    <h5>{lang.news[xStore.lang]}</h5>
                                </Link>
                            </div>
                            <LangSelector/>
                            <Hamburger toggled={isOpen} toggle={setOpen}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(TopNav);
