import React from 'react';
import CurrentPage from "../../components/CurrentPageInfo/CurrentPage";
import {Map, YMaps} from "react-yandex-maps";
import {Box, Grid} from "@material-ui/core";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

import phoneIcon from '../../assests/image/contact/phone.jpg'
import city from '../../assests/image/contact/city.png'
import email from '../../assests/image/contact/email.png'
import './contact.css'
import {useTranslation} from "react-i18next";

const Contact = () => {
    const {t} = useTranslation();

    return (
        <div>
            <CurrentPage PageName={t('nav.contact')}/>
            <Box mt={5} mb={5} ml={2} mr={2}>
                <div className={`block_title`}>
                    <h2>{t('map_location')}</h2>
                </div>
                <Box display="flex" justifyContent="center">
                    <YMaps>
                        <Map width={`90%`} height={`500px`} defaultState={{ center: [41.2920676, 69.1822182], zoom: 9 }} />
                    </YMaps>
                </Box>
            </Box>
            <Box ml={2}>
                <div className={`block_title`}>
                    <h2>{t('get_in_touch')}</h2>
                </div>
            </Box>
            <Box ml={5} mr={5}>
                <Grid container spacing={1}  justify="center">
                    <Grid item xs={12} md={4}>
                        <ContactInfo title={t('contact_info_mobile.title')} desc={t('contact_info_mobile.desc')} img={phoneIcon}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactInfo title={t('contact_info_city.title')} desc={t('contact_info_city.desc')}  img={city}/>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ContactInfo title={t('contact_info_mail.title')} desc={t('contact_info_mail.desc')}  img={email}/>
                    </Grid>
                </Grid>
            </Box>
            <div className={`margin_end_section`}>

            </div>
        </div>
    );
};

export default Contact;