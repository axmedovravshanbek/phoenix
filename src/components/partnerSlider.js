import React from 'react';
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from 'swiper';
import 'swiper/css'

const PartnerSlider = ({dir, offset = 1}) => {
    return (
        <Swiper dir={dir} className='partners-slider' modules={[Autoplay]} slidesPerView={4} loop={true}
                spaceBetween={24} autoplay={{
            delay: 1000,
            disableOnInteraction: false
        }} breakpoints={{
            0: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 5
            },
            992: {
                slidesPerView: 7
            },
            1200: {
                slidesPerView: 9
            },
        }}>
            {[...Array(15).keys()].map((i) => (
                <SwiperSlide key={i} className='my-4'>
                    <Link to='/partners'>
                        <img src={`../img/sp${(i + offset) % 15}.png`} alt={i} className="w-100 bra10 mb-2"/>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PartnerSlider;
