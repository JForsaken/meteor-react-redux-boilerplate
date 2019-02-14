import ACTIONS from '../actionTypes';
import LS from '../../utils/localstorage';
import { normalizeLanguageString } from '../../translations/helpers';

import {
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
} from '../../translations/constants';

const defaults = [DEFAULT_LANGUAGE, DEFAULT_COUNTRY, DEFAULT_LOCALE];


export const changeLanguage = (language) => {
  const firstSupportedLanguage = SUPPORTED_LOCALES.find(l => l.languages.includes(language));

  if (!firstSupportedLanguage) {
    return {
      type: ACTIONS.APP.CHANGE_LOCALE,
    };
  }

  const locale = `${language}_${firstSupportedLanguage.country.toUpperCase()}`;

  const [
    normalizedLanguage,
    normalizedCountry,
  ] = normalizeLanguageString(locale, SUPPORTED_LOCALES, defaults);

  LS.set('language', normalizedLanguage);
  LS.set('country', normalizedCountry);
  LS.set('locale', locale);

  return {
    type: ACTIONS.APP.CHANGE_LOCALE,
    language: normalizedLanguage,
    country: normalizedCountry,
    locale,
  };
};

export const changeLocale = (locale = DEFAULT_LOCALE) => {
  const countryLS = LS.get('country');
  const languageLS = LS.get('language');
  const localeLS = LS.get('locale');

  // Early return for the case where we do not have a locale in query params,
  // then use last stored values in LS
  if (!locale && countryLS && languageLS && localeLS) {
    return {
      type: ACTIONS.APP.CHANGE_LOCALE,
      language: languageLS,
      country: countryLS,
      locale: localeLS,
    };
  }

  const [
    normalizedLanguage,
    normalizedCountry,
  ] = normalizeLanguageString(locale, SUPPORTED_LOCALES, defaults);

  LS.set('language', normalizedLanguage);
  LS.set('country', normalizedCountry);
  LS.set('locale', locale);

  return {
    type: ACTIONS.APP.CHANGE_LOCALE,
    language: normalizedLanguage,
    country: normalizedCountry,
    locale,
  };
};
