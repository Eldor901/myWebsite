import React from "react";
import { Box, Divider } from "@material-ui/core";
import "./currentPage.css";

const CurrentPage = ({ PageName }) => {
  return (
    <Box className={"background_color"}>
      <Divider light />
      <h1 align="center" className={`font_capitalize page_header`}>
        {PageName}
      </h1>
      <Divider light />
    </Box>
  );
};

export default CurrentPage;
