import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import de from "./locales/de.json"
import en from "./locales/en.json"
import es from "./locales/es.json"
import pl from "./locales/pl.json"
import pt from "./locales/pt.json"
import ru from "./locales/ru.json"

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    es: { translation: es },
    pl: { translation: pl },
    pt: { translation: pt },
    ru: { translation: ru },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
