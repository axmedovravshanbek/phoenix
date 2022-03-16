import React from 'react';

const Loading = () => {
    return (
        <div className='loading'>
            <div className='noise'>
                <div className='loader'>
                    <img src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356396/phoenix/ef6tmnsponj4q02o7lbl.svg' className='bird' alt='phoenix' width={300}/>
                    <div className='logo-words d-none d-lg-flex'>
                        <img src='https://res.cloudinary.com/dm96pyie3/image/upload/v1647356456/phoenix/q3zxrmv4dcgccw0krxyp.svg' style={{paddingLeft: 120}} width={580} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Loading
