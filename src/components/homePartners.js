import React from 'react';
import {Link} from "react-router-dom";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import PartnerSlider from "./partnerSlider";

const HomePartners = () => {
    return (
        <div className='mb-120'>
            <div className='container mb-3'>
                <div className='d-flex'>
                    <Link to='/partners'>
                        <h2>{lang.ourPartners[xStore.lang]}</h2>
                    </Link>
                </div>
            </div>
            <PartnerSlider offset={4}/>
            <PartnerSlider offset={3} dir='rtl'/>
            <PartnerSlider offset={2}/>
        </div>
    );
};

export default observer(HomePartners);
