import React, {useState} from 'react';
import {xStore} from "../js/mobxStore";
import {observer} from 'mobx-react-lite'

const LangSelector = () => {
    const [open, setOpen] = useState(false);
    const languages = [
        {short: 'en', long: 'English', img:'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355649/phoenix/wqakmcl3d2mrmdo7g625.svg'},
        {short: 'uz', long: 'O\'zbekcha', img:'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355649/phoenix/co2xreugozejhrnlkuxd.svg'},
        {short: 'ru', long: 'Русский', img:'https://res.cloudinary.com/dm96pyie3/image/upload/v1647355649/phoenix/klmilhvooyju7xl605v5.svg'}
    ];
    return (
        <div className='lang-selector position-relative'>
            <h5 onClick={() => setOpen(!open)}>{xStore.lang}</h5>
            {/*<div style={{transform: `scale(${open ? 1 : 0})`, }} className='position-absolute wrapper'>*/}
            <div style={{height: (open ? 142 : 0), opacity: open ? 1 : 0}} className='position-absolute wrapper'>
                <div className='wrapper-border'>
                    {languages.map(({long, short, img}) => (
                        <div className={`d-flex p-2 align-items-center lang ${short === xStore.lang ? 'selected' : ''}`}
                             key={short} onClick={() => {
                            xStore.setLang(short);
                            setOpen(false)
                        }}>
                            <img src={img} alt={short} style={{borderRadius: 50, width: 30}}/>
                            <h6 className='ms-2'>{long}</h6>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default observer(LangSelector);
