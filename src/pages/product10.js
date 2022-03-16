import React from 'react';
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {Link, useParams} from "react-router-dom";
import Img from "../components/img";

const Product10 = () => {
    const {category} = useParams();
    return (
        <div className='container z2 catalog'>
            <h2 className='mb-4'>{xStore.catalog.filter(i => i.route === category)[0][xStore.lang]}</h2>
            <div className="row">
                {xStore.products.map((item, id) => (
                    <div key={id} className='col-md-6 col-xl-4'>
                        <Link to={`/products/${category}/${id}`}>
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

export default observer(Product10);
