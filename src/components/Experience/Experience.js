import React from 'react';
import ResumeInfo from "../ResumeInfo/ResumeInfo";
import {useTranslation} from "react-i18next";

const Experience = () => {
    const {t} = useTranslation();

    return (
        <>
            <div className={`block_title`}>
                <h2>{t('experience')}</h2>
            </div>
            <ResumeInfo
                year={t('experience_novolab.year')}
                year_content={t('experience_novolab.year_content')}
                desc_year={t('experience_novolab.desc_year')}
                title_year={t('experience_novolab.title_year')}
            />
            <ResumeInfo
                year={t('experience_Omega_r.year')}
                year_content={t('experience_Omega_r.year_content')}
                desc_year={t('experience_Omega_r.desc_year')}
                title_year={t('experience_Omega_r.title_year')}
            />
        </>
    );
};

export default Experience;