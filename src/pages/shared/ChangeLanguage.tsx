import React from "react";
import { useTranslation } from "react-i18next";

type PropsType = {
  language: string;
  setLanguage: (lang: string) => void;
};
const ChangeLanguage: React.FC<PropsType> = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();
  const changeLang = () => {
    if (language === "ua") {
      setLanguage("en");
      i18n.changeLanguage("en");
    } else {
      setLanguage("ua");
      i18n.changeLanguage("ua");
    }
  };
  return (
    <button onClick={changeLang}>
      {language}
    </button>
  );
};

export default React.memo(ChangeLanguage);