import React from 'react';
import FacebookIcon from "@material-ui/icons/Facebook";
import './iconColors.css'
import {IconButton, Tooltip} from "@material-ui/core";
import SocialNetwok from "./SocialNetwok";

const Facebook = ({link}) => {
    return (
        <div>
            <SocialNetwok onClick={ event => window.location.href=link}>
                <Tooltip title="facebook" >
                    <IconButton >
                        <FacebookIcon className={`facebook`}/>
                    </IconButton>
                </Tooltip>
            </SocialNetwok>
        </div>
    );
};

export default Facebook;