import React from "react";
import Icon from "../Icon/Icon";
import html from "../../assests/image/frontend_stack/html.png";
import css from "../../assests/image/frontend_stack/css.png";
import jsicon from "../../assests/image/frontend_stack/js.png";
import Framework from "../Framework/Framework";
import { useTranslation } from "react-i18next";
import { Box } from "@material-ui/core";

const FrontendSkills = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <div className={`block_title`}>
        <h2>{t("frontend_skills")}</h2>
        <div>
          <Icon img={html} />
          <Icon img={css} />
          <Icon img={jsicon} />
        </div>
        <Framework
          title={t("framework_JS.title")}
          description={t("framework_JS.description")}
        />
        <Framework
          title={t("framework_UI.title")}
          description={t("framework_UI.description")}
        />
      </div>
    </Box>
  );
};

export default FrontendSkills;
