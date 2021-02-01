import React from 'react';
import {Avatar, Box, Grid, Typography} from "@material-ui/core";
import './professiondescription.css'

const ProffesionDescription = ({title, desc, img}) => {
    return (
        <>
                <Grid item>
                </Grid>
                <Grid item xs className={`block_description`}>
                    <Grid container>
                        <Box mr={2} ml={2}>
                            <img src={img} width={'50px'} />
                        </Box>
                        <Grid  item xs>
                            <h4 className={`zero_margin`}>{title}</h4>
                            <Box mr={5}>
                            <p className={`zero_margin text_desc`}>
                                {desc}
                            </p>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
        </>
    );
};

export default ProffesionDescription;