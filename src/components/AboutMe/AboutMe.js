import React from "react";
import { Box, Grid } from "@material-ui/core";
import ProffesionDescription from "../PreffesionDescription/ProffesionDescription";
import "./aboutMe.css";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box ml={4} mr={4} mt={4}>
        <div className={`block_title`}>
          <h2>{t("summary")}</h2>
        </div>
        <Grid container justify="center">
          <ProffesionDescription
            desc={t("aboutMe.description")}
            title={t("aboutMe.title")}
          />
        </Grid>
      </Box>
    </>
  );
};

export default AboutMe;
