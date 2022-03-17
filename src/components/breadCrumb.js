import React from 'react';
import {lang} from "../js/lang";
import {xStore} from "../js/mobxStore";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const BreadCrumb = ({path}) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <Link to='/'>
                        <h6>{lang.home[xStore.lang]}</h6>
                    </Link>
                </li>
                {path.map((item, i) => {
                    if (i + 1 !== path.length) {
                        return <li key={i} className="breadcrumb-item">
                            <Link to={item.link}>
                                <h6 className='d-inline'>{item.tag}</h6>
                            </Link>
                        </li>
                    } else return <li key={i} className="breadcrumb-item active" aria-current="page"><h6
                        className='d-inline'>{item.tag}</h6></li>
                })}
            </ol>
        </nav>
    );
};

export default observer(BreadCrumb);
