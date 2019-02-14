import LS from '../../utils/localstorage';

import {
  BROWSER_LANGUAGE,
  BROWSER_COUNTRY,
  DEFAULT_LOCALE,
} from '../../translations/constants';


const initialState = {
  working: false,
  language: LS.get('language') || BROWSER_LANGUAGE,
  country: LS.get('country') || BROWSER_COUNTRY,
  locale: LS.get('locale') || DEFAULT_LOCALE,
  userId: LS.get('userId') || null,
  token: LS.get('token') || null,
  tabs: [],
  modal: {
    open: false,
    meta: {},
  },
  currentTab: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
};
