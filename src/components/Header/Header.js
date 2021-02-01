import React, {Component, useEffect, useState} from 'react';
import {Box, Button, Card, Grid, Link, Menu, Toolbar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";
import logo from  '../../assests/image/Logo.png';
import './header.css';
import i18n from '../../locales/i18n'



const HeaderLinks = [
    {
        to: '/',
        name: "nav.about",
    },
    {
        to: '/portfolio',
        name: "nav.portfolio",
    },
    {
        to: '/resume',
        name: "nav.resume",
    },
    {
        to: '/blog',
        name: "nav.blog",
    },
    {
        to: '/contact',
        name: "nav.contact",
    },

]

const Links = (history, t) => HeaderLinks.map((item, id) => {
    return <Box className={`pointer`}  p={1} key={id}><Button className={`text_color_main`} onClick={()=> history.push(item.to)}>{t(item.name)}</Button></Box>
});



const Header = () => {
   const {t} = useTranslation();
   const [anchor, setAnchor] = useState(null);
   const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));

   let history = useHistory();

    const changeLanguage = () => {
        if(lang === 'en')
        {
            localStorage.setItem('i18nextLng', 'ru');
            setLang('ru');
            i18n.changeLanguage("ru");
        }
        else
        {
            localStorage.setItem('i18nextLng', 'en');
            setLang('en')
            i18n.changeLanguage('en');
        }
    }





    return (
            <Box p={4}>
                <div  position="static" className={'theme_color'}>
                        <Grid container >
                            <Grid item md={4} xs={10} className={`left_zero`}>
                                <Grid container>
                                    <img src={logo} width={'100px'}/>
                                    <Box display="flex" justifyContent="flex-start" mt={2}>
                                        <h3>{t("name")}</h3>
                                        <Box pl={1} pt={0.5}>
                                            <p>{t("surname")}</p>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>

                            <Grid item md={8}  xs={2}>
                                <Box display="flex" justifyContent="flex-end" mt={2} p={1}>
                                    <Box display={{ xs: 'none', md: 'flex' }} >
                                        {Links(history, t)}
                                        <Box className={`pointer`}  p={1} ><Button className={`text_color_main`} onClick={changeLanguage}>   {lang === 'en' ? <>Ру</> : <>En</>}</Button></Box>
                                    </Box>
                                    <Box display={{ xs: 'flex', md: 'none' }}>
                                        <p className={`text_color_main menu_icon`}  onClick={(event) => setAnchor(event.currentTarget)}>
                                            <MenuIcon fontSize="large"/>
                                        </p>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchor}
                                            keepMounted
                                            className={`menu_icon`}
                                            open={Boolean(anchor)}
                                            onClose={()=> setAnchor(null)}
                                        >
                                            <Box>
                                                {Links(history, t)}
                                                <Box className={`pointer`}  p={1} ><Button className={`text_color_main`} onClick={changeLanguage}>
                                                    {lang === 'en' ? <>Русский</> : <>English</>}
                                                </Button></Box>
                                            </Box>
                                        </Menu>
                                    </Box>
                                </Box>
                            </Grid>
                     </Grid>
                </div>
            </Box>
        );
}

export default Header;