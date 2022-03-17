import React from 'react';

const Img = ({src,style, className, width, height}) => {
    return (
        <div style={{width, height}} className={`${className} skeleton`}>
            <div style={{
                ...style,
                width,
                height,
                backgroundImage: `url("${src}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
            }}/>
        </div>);
};

export default Img;
