// done
import React from 'react';
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {lang} from "../js/lang";
import BreadCrumb from "../components/breadCrumb";

const PartnersPage = () => {
    return (
        <div className='container z2 mb-120'>
            <BreadCrumb path={[{tag: lang.ourPartners[xStore.lang]}]}/>
            <h2 className='mb-3 mb-lg-4'>{lang.ourPartners[xStore.lang]}</h2>
            <div className="row">
                {[...Array(36).keys()].map((item, id) => (
                    <div key={id} className='col-6 col-sm-4 col-md-3 col-xl-2 mt-5'>
                        <img src={`../img/sp${(id) % 15}.png`} alt={item.title} className="w-100"/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(PartnersPage);
