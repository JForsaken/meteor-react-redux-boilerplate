import { curry, pathOr } from 'ramda';


export const getTranslations = state => state.translations;

export const getTranslation = curry((state, path) => (
  pathOr('', path.split('.'), state.translations)
));
