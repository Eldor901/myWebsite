import React from "react";
import CurrentPage from "../../components/CurrentPageInfo/CurrentPage";
import { Box, Grid } from "@material-ui/core";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import FrontendSkills from "../../components/FrontedSkills/FrontendSkills";
import BackendSkills from "../../components/BackendSkills/BackendSkills";
import "./resume.css";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();

  return (
    <div>
      <CurrentPage PageName={t("resume")} />
      <Box mr={5} ml={5} mt={5}>
        <Grid container>
          <Grid md={6} xs={12}>
            <Education />
          </Grid>
          <Grid md={6} xs={12}>
            <Experience />
          </Grid>
        </Grid>
        <Grid container>
          <Grid md={6} xs={12}>
            <FrontendSkills />
          </Grid>
          <Grid md={6} xs={12}>
            <BackendSkills />
          </Grid>
        </Grid>
        <div className={`margin_end_section`}></div>
      </Box>
    </div>
  );
};

export default Resume;
