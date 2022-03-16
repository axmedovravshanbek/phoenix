import React from 'react';
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";

const OurServices = () => {
    return (
        <div className='container our-services mt-5 mb-120'>
            <h2 className='mb-32'>{lang.ourServices[xStore.lang]}</h2>
            <div className='row justify-content-center'>
                {xStore.services.map((item, id) => (
                    <div key={id} className='col-10 mb-3 mb-md-0 service col-md-6 col-lg-4'>
                        <div className='rounded-pill ar11 bo-color w-100 position-relative bx1 by1 bg-white'>
                            <div
                                className="ar11-inner position-absolute h-100 w-100 d-flex justify-content-center align-items-center">
                                <div className='num position-absolute'>{(id + 1).toString().padStart(2, 0)}</div>
                                <h6>{item[xStore.lang]}</h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(OurServices);
