import React from 'react';
import { Instagram as InstagramIcon} from "@material-ui/icons";
import {IconButton, Tooltip} from "@material-ui/core";
import './iconColors.css'
import SocialNetwok from "./SocialNetwok";

const Instagram = ({link}) => {
    return (
        <>
            <SocialNetwok onClick={ event => window.location.href=link}>
                <Tooltip title="instagram" >
                    <IconButton className={`instagram`}>
                        <InstagramIcon className={`instagram`}/>
                    </IconButton>
                </Tooltip>
            </SocialNetwok>
        </>
    );
};

export default Instagram;