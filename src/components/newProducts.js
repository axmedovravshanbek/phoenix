import React from 'react';
import {Link} from "react-router-dom";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import Img from "./img";

const NewProducts = () => {
    return (
        <div className='container z2 new-products mb-120'>
            <div className='d-flex'>
                <Link to='/products'>
                    <h2>{lang.newProducts[xStore.lang]}</h2>
                </Link>
            </div>
            <div className='row'>
                {xStore.products.filter((_, i) => i < 6).map((item, id) => (
                    <div key={id} className='col-md-6 col-xl-4'>
                        <Link to={`/products/engine/${id}`}>
                            <div className="bx1 product mt-4 by1 bg-white">
                                <Img
                                    src={item.image}
                                    width={316}
                                    height={191}
                                />
                                <h4 className='mt-4 bold'>{item.title}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(NewProducts);
