import React from 'react';
import SocialNetwok from "./SocialNetwok";
import {Telegram as TelecramIcon} from "@material-ui/icons";
import {IconButton, Tooltip} from "@material-ui/core";

const Telegram = ({link}) => {
    return (
        <>
            <SocialNetwok onClick={ event => window.location.href=link}>
                 <Tooltip title="telegram">
                     <IconButton>
                        <TelecramIcon className={`telegram`}/>
                     </IconButton>
                 </Tooltip>
             </SocialNetwok>
        </>
    );
};

export default Telegram;