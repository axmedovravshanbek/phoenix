import React from 'react';
import {useParams} from "react-router-dom";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import BreadCrumb from "../components/breadCrumb";

const NewsFull = () => {
    const {id} = useParams();
    return (
        <div className='container z2'>
            <BreadCrumb path={[ {tag: lang.news[xStore.lang], link:'/news'}, {tag:xStore.news[id].title[xStore.lang]}]}/>
            <h2 className='mb-3 mb-lg-4'>{lang.news[xStore.lang]}</h2>
            <div className="row">
                <div className="col-xl-6 offset-md-2 col-12 offset-0 col-md-8 offset-xl-3">
                    <h5 className="bold fs20" style={{fontSize: 24}}>
                        {xStore.news[id].title[xStore.lang]}
                    </h5>
                    <img src={xStore.news[id].image} className='w-100 mt-4 mb-3' alt=""/>
                    <div style={{opacity: 0.4}} className='d-flex'>
                        <img style={{marginRight: 6}} src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356518/phoenix/lr3f2cpz9xld9aonnig5.svg' alt='c'/>
                        <div className='fs14 me-4'>14.02.2022</div>
                        <img style={{marginRight: 6}} src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356519/phoenix/li8yddeano3abcxet2ve.svg' alt='c'/>
                        <div className='fs14 mr-4'>325 221</div>
                    </div>
                    <p className="fs16 mt-3">{xStore.news[id].subtitle[xStore.lang]}</p>
                    <p className="fs16 mt-3">At 10:57 a.m., a major power outage in Kazakhstan’s power supply systems caused power outages in Almaty, Shymkent, Taras, Turkestan (provinces) and surrounding areas. </p>
                    <p className="fs16 mt-3">Due to the negative impact of the accident on the Uzbek power grid, the electricity was cut off in the whole republic.</p>
                    <p className="fs16 mt-3">It is reported that at present, measures are being taken to launch each TPP (Tashkent and Syrdarya) separately from the neighboring state networks, connecting them step-by-step. The ministry said it would provide additional information on the details of the accident.</p>
                </div>
            </div>
        </div>
    );
};

export default observer(NewsFull);
