import React from "react";
import { Box, Grid } from "@material-ui/core";
import ProffesionDescription from "../PreffesionDescription/ProffesionDescription";
import "./Interests.css";
import ball from "../../../src/assests/image/Interests/ball.png";
import music from "../../../src/assests/image/Interests/music.png";
import { useTranslation } from "react-i18next";

const Interests = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box ml={4} mr={4} mt={4}>
        <div className={`block_title`}>
          <h2>{t("myInterests")}</h2>
        </div>
        <Grid container justify="center">
          <ProffesionDescription
            desc={t("interests_football.description")}
            title={t("interests_football.title")}
            img={ball}
          />
          <ProffesionDescription
            desc={t("interests_music.description")}
            title={t("interests_music.title")}
            img={music}
          />
        </Grid>
      </Box>
    </>
  );
};

export default Interests;
