import React from 'react';
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {lang} from "../js/lang";
import BreadCrumb from "../components/breadCrumb";

const ProductCircles = () => {
    return (
        <div className='container z2 catalog'>
            <BreadCrumb path={[{tag: lang.products[xStore.lang], link: '/news'}]}/>
            <h2 className='mb-4'>{lang.productCatalog[xStore.lang]}</h2>
            <div className="row">
                {xStore.catalog.map((item, id) => (
                    <div key={id} className='col-6 col-sm-4 col-md-3 col-xl-2 mb-4'>
                        <Link to={`${item.route}`} className="ar11 bo-color">
                            <div className="pos-a" style={{
                                backgroundImage: `linear-gradient(0deg, #00000088, #00000088), url("${xStore.products[id % 10].image}")`
                            }}>
                                <h4 className="bold text-center p-4">
                                    {item[xStore.lang]}
                                </h4>
                            </div>
                            <h4 className="bold text-center p-4">
                                {item[xStore.lang]}
                            </h4>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default observer(ProductCircles);
