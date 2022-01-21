import { Box, GridList, GridListTile, makeStyles } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import CurrentPage from "../../components/CurrentPageInfo/CurrentPage";
import Image from "../../components/Image/Image";
import data from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <CurrentPage PageName={t("nav.portfolio")} />
      <Box mt={5} mb={5} ml={5} mr={5}>
        <Box display={{ xs: "none", md: "block" }}>
          <GridList cellHeight={360} cols={12}>
            {data.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <Image
                  title={tile.title}
                  img={tile.img}
                  video={tile.video}
                  content={tile.content}
                />
              </GridListTile>
            ))}
          </GridList>
        </Box>
        <Box display={{ xs: "block", md: "none" }}>
          <GridList cellHeight={160} cols={12}>
            {data.map((tile) => (
              <GridListTile key={tile.img} cols={tile.cols || 1}>
                <Image
                  title={tile.title}
                  img={tile.img}
                  video={tile.video}
                  content={tile.content}
                />
              </GridListTile>
            ))}
          </GridList>
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;
