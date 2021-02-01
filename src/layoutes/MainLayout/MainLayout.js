import React, {Fragment} from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './mainLayout.css';
import {Card, Container} from "@material-ui/core";

const MainLayout = ({children}) => {
    return (
        <>
            <Container className={`container`}>
                <Card className={`card_container`}>
                    <Header/>
                       {children}
                    <Footer/>
                </Card>
            </Container>
        </>
    );
};

export default MainLayout;