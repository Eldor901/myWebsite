import React from 'react';
import {Box, Grid} from "@material-ui/core";


const ContactInfo = ({img, desc, title}) => {
    return (
        <>
            <Grid container>
                <Box mr={2} ml={2}>
                    <img  src={img} height={'50px'} width={'50px'}/>
                </Box>
                <Grid  item xs>
                    <h4 className={`zero_margin`}>{title}</h4>
                    <p className={`zero_margin text_desc`}>
                        {desc}
                    </p>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactInfo;