import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import Img from "../components/img";
import BreadCrumb from "../components/breadCrumb";

const ProductInfo = () => {
    const [selected, setSelected] = useState(0);
    const {category, n} = useParams();
    const filters = ['', 'saturate(8)', 'contrast(200%)', 'hue-rotate(90deg)'];
    const data = [
        {key1: 'Reference no.', val: 'BP0743287_UP'},
        {key1: 'Brand', val: 'Volvo'},
        {key1: 'In stock', val: '1'},
        {key1: 'New / Used', val: 'Used'},
        {key1: 'Classification', val: 'ORIGINAL'},
        {key1: 'Length (cm)', val: '120'},
        {key1: 'Width (cm)', val: '50'},
        {key1: 'Height (cm)', val: '20'}
    ];
    return (
        <div className='container z2'>
            <BreadCrumb path={[
                {
                    tag: lang.products[xStore.lang],
                    link: '/products'
                },
                {
                    tag: xStore.catalog.filter(i => i.route === category)[0][xStore.lang],
                    link: `/products/${xStore.catalog.filter(i => i.route === category)[0].route}`
                },
                {
                    tag: xStore.products[n].title
                },
            ]}/>
            <h2 className='mb-4'>{lang.productInfo[xStore.lang]}</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-xl-3 d-flex flex-row flex-xl-column">
                            {filters.map((f, i) => (
                                <div onClick={() => setSelected(i)}
                                     style={{borderColor: i === selected ? '#F39025' : '#EBEBEB', marginBottom: 12,}}
                                     key={i} className='bx1 by1 w-100 py-1'>
                                    <Img src={xStore.products[n].image} width='100%' height={82} className='w-100'
                                         style={{
                                             filter: f,
                                             cursor: 'pointer',
                                         }}/>
                                </div>
                            ))}
                        </div>
                        <div className="col-xl-9 ps-xl-0">
                            <div className="bx1 product by1 bg-white" style={{height: 'calc(100% - 12px)'}}>
                                <Img src={xStore.products[n].image} width='100%' height={250}
                                     style={{filter: filters[selected]}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className="bold fs32">{xStore.products[n].title}</div>
                    <p className="mt-2 mb-3">Unfortunately there is delivery time available for your country, please
                                             contact us for more
                                             information. </p>
                    <div className="my-table">
                        {data.map(({key1, val}, id) => (
                            <div className='row m-0' key={id}>
                                <div className="col-lg-8 col-6 p1424">{key1}</div>
                                <div className="col-lg-4 col-6 p1424" style={{color: '#BA5400'}}>{val}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(ProductInfo);
