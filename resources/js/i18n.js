import en from "./locales/en.js";
import fr from "./locales/fr.js";
import Vue from 'vue';
import VueI18n from 'vue-i18n';
const messages = {
    en: en,
    fr: fr
    };

  Vue.use(VueI18n);

  // Create VueI18n instance with options
  const i18n = new VueI18n({
    locale: localStorage.getItem('lang') || 'en', // set locale
    messages, // set locale messages
  });

  export default i18n;
