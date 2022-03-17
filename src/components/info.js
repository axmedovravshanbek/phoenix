import React from 'react';
import Img from "./img";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";

const Info = () => {
    return (
        <div className='mt-0 mt-lg-5 info z2'>
            <div className="truck-image position-absolute h-100 offset-lg-6">
                <Img width={'100%'} height={'100%'} src='https://iplogger.com/2IQhb4.jpg'/>
            </div>
            <div className='container h-100'>
                <div className='row h-100'>
                    <div className='col-12 py-5 position-relative h-100 col-lg-6'>
                        <div className="semicircle desk"/>
                        <div className='info-texts z2'>
                            <h1 className='col-xxl-8 mb-3'>Phoenix Global Tradings</h1>
                            <p>{`${lang.longAbout[xStore.lang].split('.')[0]}.
                                 ${lang.longAbout[xStore.lang].split('.')[1]}.
                                 ${lang.longAbout[xStore.lang].split('.')[2]}.`}</p>
                            <div className='btn-orange orange-hover' onClick={() => window.scrollTo(0, 10000)}>
                                <h4 className="text-white">{lang.leaveRequestShort[xStore.lang]}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Info);
