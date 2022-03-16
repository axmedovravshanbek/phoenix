import React from 'react';
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";

const ContactUs = () => {
    return (
        <div className='container z2 mt-120 mb-120'>
            <h2 className='pb-2 mb-4'>{lang.contactWithUs[xStore.lang]}</h2>
            <div style={{backgroundColor: '#F5F5F7'}}>
                <div className="row">
                    <div className="col-md-7 mb-md-0 mb-4">
                        <div style={{padding: 36}}>
                            <h4 className='mb-4'>{lang.leaveRequest[xStore.lang]}</h4>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder={lang.namePlaceholder[xStore.lang]}
                                           className='mb-4 w-100'/>
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder={lang.emailPlaceholder[xStore.lang]}
                                           className='mb-4 w-100'/>
                                </div>
                                <div className="col-12">
                                    <textarea type="text" className='col-12 w-100'
                                           placeholder={lang.messagePlaceholder[xStore.lang]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 test d-flex justify-content-lg-end justify-content-center">
                        <div style={{padding: 36}} className='d-flex align-items-center'>
                            <div className="circle220 orange-hover">
                                <h4 className='text-white bold'>{lang.send[xStore.lang]}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(ContactUs);
