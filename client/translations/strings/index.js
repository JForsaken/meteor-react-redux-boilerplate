import { merge } from 'ramda';

import en from './en';
import fr from './fr';
import enCA from './en-ca';
import frCA from './fr-ca';
import enUS from './en-us';


const translations = {
  'en-ca': merge(en, enCA),
  'fr-ca': merge(fr, frCA),
  'en-us': merge(en, enUS),
};

const def = translations['en-ca'];

export default locale => translations[`${locale[0]}-${locale[1]}`] || def;
