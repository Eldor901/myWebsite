import React from "react";
import Icon from "../Icon/Icon";
import php from "../../assests/image/backend_stack/php.png";
import node from "../../assests/image/backend_stack/node.png";
import netcore from "../../assests/image/backend_stack/netcore.png";
import mysql from "../../assests/image/backend_stack/mysql.png";
import postgre from "../../assests/image/backend_stack/postgre.png";
import Framework from "../Framework/Framework";
import mongodb from "../../assests/image/backend_stack/mongodb.png";
import { useTranslation } from "react-i18next";

const BackendSkills = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`block_title`}>
        <h2>{t("backend_skills")}</h2>
        <div>
          <Icon img={php} />
          <Icon img={node} />
          <Icon img={netcore} />
          <Icon img={mysql} />
          <Icon img={postgre} />
          <Icon img={mongodb} />
        </div>
        <Framework
          title={t("framework_PHP.title")}
          description={t("framework_PHP.description")}
        />
        <Framework
          title={t("framework_NODEJS.title")}
          description={t("framework_NODEJS.description")}
        />
        <Framework
          title={t("framework_C#.title")}
          description={t("framework_C#.description")}
        />
      </div>
    </>
  );
};

export default BackendSkills;
