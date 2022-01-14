import React from "react";
import { Box, Grid } from "@material-ui/core";
import "./ResumeInfo.css";

const ResumeInfo = ({ year, year_content, title_year, desc_year }) => {
  return (
    <>
      <div className={`block_title block_title_content `}>
        <div>
          <h5 className={`scroll_year zero_margin`}>{year}</h5>
          <span className={`text_color`}>{year_content}</span>
          <Box ml={3} mr={3} className={`box`}>
            <h4>{title_year}</h4>
            <p
              className={`title_section_content_description zero_margin_top description_year`}
            >
              {desc_year}
            </p>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ResumeInfo;
