import React from 'react';
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import Img from "./img";

const HomeAboutUs = () => {
    return (
        <div className='container z2'>
            <div className='d-flex'>
                <Link to='/about'>
                    <h2>{lang.aboutUs[xStore.lang]}</h2>
                </Link>
            </div>
            <div className='about-img'/>
            <Img
                src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647448348/phoenix/gdmrxyeog3wtqazcz5za.png'
                className='mt-4 mb-32'
                width='100%'
                height={457}
            />
            <div className="row mb-120">
                <div className="col-lg-9 mt-lg-4">
                    <h3 className='bold mb-3'>Phoenix Global Trading</h3>
                    <p>{lang.longAbout[xStore.lang]}</p>
                </div>
                <div className="col-lg-3 mt-lg-0 mt-4">
                    <div className='d-flex justify-content-center justify-content-lg-end align-items-center h-100'>
                        <Link to='/about'>
                            <div className='button circle220 orange-hover'>
                                <h4 className='text-white'>{lang.readMore[xStore.lang]}</h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(HomeAboutUs);
