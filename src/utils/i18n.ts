import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import ENGLISH from "../locales/en/translation.json";
import UKRAINE from "../locales/ua/translation.json"


export const resources = {
  en: {
    ENGLISH
  },
  ua: {
   UKRAINE
  }
};
export const defaultNS = 'ENGLISH'

 i18n
   .use(initReactI18next)
   .init({
     lng: 'en',
     defaultNS,
     resources,
   }).then();
console.log(resources)
