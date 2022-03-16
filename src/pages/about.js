import React from 'react';
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {Link} from "react-router-dom";
import Img from "../components/img";
import {observer} from "mobx-react-lite";

const About = () => {
    return (
        <div className='container z2'>
            <h2 className='mb-4'>{lang.aboutUs[xStore.lang]}</h2>
            <div className="row">
                <div className='col-lg-8 offset-lg-2'>
                    <Img
                        src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647448348/phoenix/gdmrxyeog3wtqazcz5za.png'
                        className='mt-4 mb-32' width='100%' height={457}/>
                    <div className="mt-lg-4">
                        <h3 className='bold mb-3'>Phoenix Global Trading</h3>
                        <p>{lang.longAbout[xStore.lang]}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-xxl-9 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-6 ms-lg-1">
                            <div
                                className="circle bg-white position-static d-flex justify-content-center align-items-center bo-color ">
                                <h6 className="p-5"> {lang.ups[1][xStore.lang]} </h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div
                                className="circle bg-white position-static d-flex justify-content-center align-items-center bo-color">
                                <h6 className="p-5">{lang.ups[2][xStore.lang]}</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6 mx-1 my-lg-0">
                            <div
                                className="circle bg-white position-static d-flex justify-content-center align-items-center bo-color">
                                <h6 className="p-5">{lang.ups[3][xStore.lang]}</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div
                                className="circle bg-white position-static d-flex justify-content-center align-items-center bo-color">
                                <h6 className="p-5">{lang.ups[4][xStore.lang]}</h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div
                                className="circle bg-white position-static d-flex justify-content-center align-items-center bo-color">
                                <h6 className="p-5"> {lang.ups[0][xStore.lang]}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default observer(About)
