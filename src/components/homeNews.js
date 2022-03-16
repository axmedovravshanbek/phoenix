import React from 'react';
import {Link} from "react-router-dom";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from 'swiper';
import 'swiper/css'
import 'swiper/css/navigation'
import Img from "./img";


const HomeNews = () => {
    return (
        <div className='container z2 home-news'>
            <div className='d-flex'>
                <Link to='/news'>
                    <h2 className='mb-0 mb-lg-4'>{lang.news[xStore.lang]}</h2>
                </Link>
            </div>
            <Swiper className='' modules={[Autoplay, Navigation]} slidesPerView={4} navigation={true} loop={true}
                    spaceBetween={24} autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }} breakpoints={{
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                },
            }}>
                {xStore.news.filter((_, i) => i < 4).map((item, id) => (
                    <SwiperSlide key={id} className='new bg-white bx1 by1'>
                        <Link to={`/news/${id}`} className='p-4 d-block'>
                            <Img
                                src={item.image}
                                className='mb-2'
                                width='100%'
                                height={163}
                            />

                            {/*<img src={item.image} alt={item.title} className="mb-2"/>*/}
                            <div style={{opacity: 0.4, margin: '10px 0'}} className='d-flex'>
                                <img style={{marginRight: 6}}
                                     src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356518/phoenix/lr3f2cpz9xld9aonnig5.svg'
                                     alt='c'/>
                                <div className='fs14 me-4'>14.02.2022</div>
                                <img style={{marginRight: 6}}
                                     src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356519/phoenix/li8yddeano3abcxet2ve.svg'
                                     alt='c'/>
                                <div className='fs14 mr-4'>325 221</div>
                            </div>
                            <h6 className='bold'>{item.title[xStore.lang]}</h6>
                            <p className='mt-2 fs15'>{item.subtitle[xStore.lang]}</p>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default observer(HomeNews);
