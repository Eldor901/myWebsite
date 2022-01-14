import React from "react";
import "./introduction.css";
import { Box, Button, Grid } from "@material-ui/core";
import pimg from "../../assests/image/personal_image.jpg";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const Introduction = () => {
  const { t } = useTranslation();
  let history = useHistory();

  return (
    <>
      <Grid item md={5} xs={12}>
        <Box className={`center_md_low avatar_block`}>
          <img src={pimg} className={"image_style"} />
        </Box>
      </Grid>
      <Grid item md={1}></Grid>
      <Grid item md={5} xs={12}>
        <Box className={`center_md_low`}>
          <p className={`profession`}>{t("softwareEngineer")}</p>
          <h1 className={`name`}>{t("eldorErgashev")}</h1>
          <div className={`block`}></div>
          <h2 className={`quote`}>{t("quote_description")}</h2>
          <Button
            variant="outlined"
            className={`btn_outlined contact_btn`}
            onClick={() => {
              history.push("/contact");
            }}
          >
            {t("nav.contact")}
          </Button>
          <Button variant="outlined" className={`btn_outlined`}>
            {t("downloadCv")}
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Introduction;
