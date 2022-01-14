import React from "react";
import { useParams } from "react-router";
import data from "../Blog/data";
import {
  Box,
  Dialog,
  DialogContent,
  GridList,
  GridListTile,
} from "@material-ui/core";
import "./blogDescription.css";

const BlogDescription = () => {
  let { id } = useParams();
  const [open, setOpen] = React.useState(false);
  const [urlOpen, setUrlOpen] = React.useState("");

  let BlogData = data.find((x) => x.id == id);

  if (!BlogData) return <h1 align={`center`}>Nothing is found</h1>;

  return (
    <div>
      <Box mr={5} ml={5} mt={5}>
        <div className={`block_title`}>
          <h2>{BlogData.title}</h2>
          <Box display={{ xs: "none", md: "block" }}>
            <GridList cellHeight={360} cols={12}>
              {BlogData.imgArray.map((tile) => (
                <GridListTile key={tile.img} cols={tile.col || 1}>
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className={`pointer`}
                    onClick={() => {
                      setOpen(true);
                      setUrlOpen(tile.img);
                    }}
                  />
                  <Dialog
                    className={`pointer`}
                    open={open}
                    onClose={() => setOpen(false)}
                  >
                    <img src={urlOpen} className={`img_overflow`} />
                  </Dialog>
                </GridListTile>
              ))}
            </GridList>
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <GridList cellHeight={360} cols={12}>
              {BlogData.imgArray.map((tile) => (
                <GridListTile key={tile.img} cols={6}>
                  <img
                    src={tile.img}
                    alt={tile.title}
                    className={`pointer`}
                    onClick={() => {
                      setOpen(true);
                      setUrlOpen(tile.img);
                    }}
                  />
                  <Dialog
                    className={`pointer`}
                    open={open}
                    onClose={() => setOpen(false)}
                  >
                    <img src={urlOpen} className={`img_overflow`} />
                  </Dialog>
                </GridListTile>
              ))}
            </GridList>
          </Box>
          <div dangerouslySetInnerHTML={{ __html: BlogData.description }}></div>
        </div>

        <div className={`margin_end_section`}></div>
      </Box>
    </div>
  );
};

export default BlogDescription;
