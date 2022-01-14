import React, { Component } from "react";
import { Box, Grid } from "@material-ui/core";
import "./Footer.css";
import Facebook from "../SocialNetwok/Facebook";
import Instagram from "../SocialNetwok/Instagram";
import Telegram from "../SocialNetwok/Telegram";
import Github from "../SocialNetwok/Github";
import { withTranslation } from "react-i18next";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`footer`}>
        <Grid container className={`footer_position`}>
          <Grid md={6} xs={12} item>
            <Grid container className={`footer_social_aps`}>
              <Facebook link="https://www.facebook.com/eldor.ergashev.9469/" />
              <Instagram link="https://www.instagram.com/just_one_el/" />
              <Telegram link="https://web.telegram.org/@fnatic_el" />
              <Github link="https://github.com/eldor901" />
            </Grid>
          </Grid>
          <Grid md={6} xs={12} item>
            <Box display="flex" mr={14} mb={1} className={`footer_block_size`}>
              <h5 className={`name_footer`}>
                {this.props.t("name")} {this.props.t("surname")}
              </h5>
            </Box>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTranslation()(Footer);
