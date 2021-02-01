import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import './socialNetwok.css'

const SocialNetwok = ({onClick, children, className, ...rest}) => {
    return (
        <div {...rest}  className={`${className} icon`} onClick={onClick}>
            {children}
        </div>
    );
};

export default SocialNetwok;