import React from "react";
import SocialNetwok from "./SocialNetwok";
import { IconButton, Tooltip } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const Github = ({ link }) => {
  return (
    <>
      <SocialNetwok onClick={(event) => (window.location.href = link)}>
        <Tooltip title="Github">
          <IconButton className={`github`}>
            <GitHubIcon className={`github`} />
          </IconButton>
        </Tooltip>
      </SocialNetwok>
    </>
  );
};

export default Github;
