import React from "react";
import CurrentPage from "../../components/CurrentPageInfo/CurrentPage";
import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
} from "@material-ui/core";
import data from "./data";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog = () => {
  let history = useHistory();
  const { t } = useTranslation();

  return (
    <>
      <CurrentPage PageName={t("nav.blog")} />
      <Box mr={5} ml={5} mt={5}>
        <GridList cellHeight={360} cols={6}>
          {data.map((tile) => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img
                src={tile.img}
                alt={tile.title}
                className={`pointer`}
                onClick={() => history.push(`/blog/${tile.id}`)}
              />
              <GridListTileBar
                title={tile.title}
                titlePosition="top"
                actionPosition="left"
              />
            </GridListTile>
          ))}
        </GridList>
      </Box>
      <div className={`margin_end_section`}></div>
    </>
  );
};

export default Blog;
