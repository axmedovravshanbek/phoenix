import React from 'react';
import {lang} from "../js/lang";
import {observer} from "mobx-react-lite";
import {xStore} from "../js/mobxStore";
import {Link} from "react-router-dom";

const Footer = () => {
    const i = [
        {
            icon: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647427448/phoenix/vbuu1b9r91jqnagoekhz.svg',
            link: 'https://instagram.com/r.r.axmedov'
        },
        {
            icon: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647427448/phoenix/pm9qnfexpwwl7zy10c3r.svg',
            link: 'https://chat-airfun.netlify.app/login'
        },
        {
            icon: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647427448/phoenix/emowtng8yq1gjjbxgx4b.svg',
            link: 'https://t.me/axmedovravshanbek'
        },
        {
            icon: 'https://res.cloudinary.com/dm96pyie3/image/upload/v1647427448/phoenix/dkzvtqik2eknmx7chlna.svg',
            link: 'https://mfmovies.netlify.app'
        },
    ];
    return (
        <div style={{backgroundColor: '#F5F5F7'}}>
            <div className="container py-5">
                <div className="row">
                    <Link to='/' className="col-12 mb-4">
                        <img
                            src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647356448/phoenix/zhpmtepvrsyjegikwjmj.svg"
                            alt="phoenix" className='d-block d-md-none'/>
                    </Link>
                    <div className="col-xl-3 col-md-6 order-4 order-md-1  py-md-3">
                        <Link to='/'>
                            <img
                                src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647356448/phoenix/zhpmtepvrsyjegikwjmj.svg"
                                alt="phoenix" className='d-none d-md-block'/>
                        </Link>
                        <h6 className="mt-md-5 mt-4 mb-3">{lang.weAreInSocial[xStore.lang]}</h6>
                        <div className="d-flex">
                            {i.map(({icon, link}) => (
                                <a href={link} key={i} target='_blank' className='me-3 mb-2 d-flex'>
                                    <img src={icon} alt=""/>
                                </a>
                            ))}
                        </div>
                        <h6 className="mt-4 mb-3">{lang.copyright[xStore.lang]}</h6>
                        <h6 className="mt-4">{lang.allRights[xStore.lang]}</h6>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-12 order-1 order-md-2 py-md-3">
                        <p className="bold mb-3 pb-1">{lang.sections[xStore.lang]}</p>
                        <div className="row">
                            <Link to='/about' className='mb-3 col-6 col-sm-12 col-lg-6 col-xl-12 d-flex'>
                                <h6>{lang.aboutUs[xStore.lang]}</h6>
                            </Link>
                            <Link to='/products' className='mb-3 col-6 col-sm-12 col-lg-6 col-xl-12 d-flex'>
                                <h6>{lang.products[xStore.lang]}</h6>
                            </Link>
                            <Link to='/partners' className='mb-3 col-6 col-sm-12 col-lg-6 col-xl-12 d-flex'>
                                <h6>{lang.ourPartners[xStore.lang]}</h6>
                            </Link>
                            <Link to='/news' className='mb-3 col-6 col-sm-12 col-lg-6 col-xl-12 d-flex'>
                                <h6>{lang.news[xStore.lang]}</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 col-12 order-3 order-sm-2 order-md-3 py-md-3">
                        <p className="bold mb-3">{lang.addresses[xStore.lang]}</p>
                        <a href="https://www.google.com/maps">
                            <div className="d-flex mb-3">
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647427602/phoenix/z9twtbfemqhi2yfxg3f3.svg"
                                        alt="" className="me-2"/>
                                </div>
                                <div>
                                    <p className="bold mb-1">{lang.usa[xStore.lang]}:</p>
                                    <h6>1321 Upland Dr. PMB 792; Houston, TX; 77043-4718</h6>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com/maps">
                            <div className="d-flex mb-3">
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647427602/phoenix/z9twtbfemqhi2yfxg3f3.svg"
                                        alt="" className="me-2"/>
                                </div>
                                <div>
                                    <p className="bold mb-1">{lang.uk[xStore.lang]}:</p>
                                    <h6>86-90 Paul street, EC2A 4NE, London</h6>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.google.com/maps">
                            <div className="d-flex mb-3">
                                <div>
                                    <img
                                        src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647427602/phoenix/z9twtbfemqhi2yfxg3f3.svg"
                                        alt="" className="me-2"/>
                                </div>
                                <div>
                                    <p className="bold mb-1">{lang.turkey[xStore.lang]}:</p>
                                    <h6>Kolektif House, Maslak 42 – Istanbul</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-3 col-md-6 col-12 order-md-4 order-2 py-md-3 my-4 my-sm-0">
                        <p className="bold mb-3">{lang.contacts[xStore.lang]}</p>
                        <a href="tel:+998999555801">
                            <div className="d-flex mb-3 pb-1">
                                <img
                                    src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647427602/phoenix/esrxpakqabpwdfrwfjba.svg"
                                    alt="" className="me-2"/>
                                <h6>+19402940150 {lang.usa[xStore.lang]}</h6>
                            </div>
                        </a>
                        <a href="tel:+998999555801">
                            <div className="d-flex mb-3 pb-1">
                                <img
                                    src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647427602/phoenix/esrxpakqabpwdfrwfjba.svg"
                                    alt="" className="me-2"/>
                                <h6>+442080898100 {lang.uk[xStore.lang]}</h6>
                            </div>
                        </a>
                        <a href="mailto:ahmedovravshanbek21@gmail.com">
                            <div className="d-flex mb-3 pb-1">
                                <img
                                    src="https://res.cloudinary.com/dm96pyie3/image/upload/v1647428003/phoenix/a7e5xshx1wogbdtsuswh.svg"
                                    alt="" className="me-2"/>
                                <h6>info@phoenixglobaltradings.com</h6>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Footer);
