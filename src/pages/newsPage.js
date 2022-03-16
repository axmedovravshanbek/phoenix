import React from 'react';
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {lang} from "../js/lang";
import {Link, Outlet} from "react-router-dom";
import Img from "../components/img";

const NewsPage = () => {
    return (
        <div className='container z2 home-news'>
            <h2 className='mb-3 mb-lg-4'>{lang.news[xStore.lang]}</h2>
            <div className="row">
                {xStore.news.map((item, id) => (
                    <div key={id} className='new mb-4 col-12 col-sm-6 col-lg-4 col-xl-3'>
                        <Link to={`/news/${id}`} className='p-4 bo-color bg-white d-block'>
                            <Img
                                src={item.image}
                                width='100%'
                                height={163}
                                className="mb-2"
                            />
                            <div style={{opacity: 0.4, margin: '10px 0'}} className='d-flex'>
                                <img style={{marginRight: 6}} src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356518/phoenix/lr3f2cpz9xld9aonnig5.svg' alt='c'/>
                                <div className='fs14 me-4'>14.02.2022</div>
                                <img style={{marginRight: 6}} src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356519/phoenix/li8yddeano3abcxet2ve.svg' alt='c'/>
                                <div className='fs14 mr-4'>325 221</div>
                            </div>
                            <h6 className='bold'>{item.title[xStore.lang]}</h6>
                            <p className='mt-2 fs15'>{item.subtitle[xStore.lang]}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(NewsPage);
