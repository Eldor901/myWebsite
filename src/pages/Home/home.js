import React from "react";
import CurrentPage from "../../components/CurrentPageInfo/CurrentPage";
import { Box, Button, Grid } from "@material-ui/core";
import "./home.css";
import Introduction from "../../components/Introduction/Introduction";
import WhatIDo from "../../components/WhatIDo/WhatIDo";
import AboutMe from "../../components/AboutMe/AboutMe";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CurrentPage PageName={t("nav.about")} />
      <Box mt={5} mb={5} ml={2} mr={2}>
        <Grid container>
          <Introduction />
          <AboutMe />
          <WhatIDo />
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
