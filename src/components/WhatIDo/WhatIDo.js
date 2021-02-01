import React from 'react';
import {Box, Grid} from "@material-ui/core";
import ProffesionDescription from "../PreffesionDescription/ProffesionDescription";
import frontend from "../../assests/image/jobs/frontendIcon.png"
import backend from "../../assests/image/jobs/backendIcon.png"
import mobile from "../../assests/image/jobs/mobileIcon.jpg"
import desctop from "../../assests/image/jobs/desctopIcon.png"
import {useTranslation} from "react-i18next";


const WhatIDo = () => {
    const {t} = useTranslation();

    return (
        <>
         <Box ml={4} mr={4} mt={4}>
             <div className={`block_title`}>
                 <h2>{t('what_i_do')}</h2>
             </div>
            <Grid container justify="center">
                <ProffesionDescription desc={t('what_i_do_backend.desc')} title={t('what_i_do_backend.title')} img={backend}/>
                <ProffesionDescription desc={t('what_i_do_frontend.desc')} title={t('what_i_do_frontend.title')} img={frontend}/>
            </Grid>
             <Grid container justify="center">
                 <ProffesionDescription desc={t('what_i_do_Mobile.desc')} title={t('what_i_do_Mobile.title')} img={mobile}/>
                 <ProffesionDescription desc={t('what_i_do_Desctop.desc')} title={t('what_i_do_Desctop.title')} img={desctop}/>
             </Grid>
        </Box>
        </>
    );
}

export default WhatIDo;