import React from 'react';
import './framework.css'

const Framework = ({title, description}) => {
    return (
        <>
          <h3 className={`margin_zero_top`}>{title}</h3>
          <p className={`margin_zero_bottom description`}> {description}</p>
        </>
    );
};

export default Framework;