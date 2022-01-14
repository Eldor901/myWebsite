import React from "react";
import ResumeInfo from "../ResumeInfo/ResumeInfo";
import { useTranslation } from "react-i18next";

const Education = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className={`block_title`}>
        <h2>{t("education")}</h2>
      </div>
      <ResumeInfo
        year={t("education_university.year")}
        year_content={t("education_university.year_content")}
        desc_year={t("education_university.desc_year")}
        title_year={t("education_university.title_year")}
      />
      <ResumeInfo
        year={t("education_lyceum.year")}
        year_content={t("education_lyceum.year_content")}
        desc_year={t("education_lyceum.desc_year")}
        title_year={t("education_lyceum.title_year")}
      />
    </>
  );
};

export default Education;
