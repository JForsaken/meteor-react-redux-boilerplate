import ACTIONS from '../actionTypes';
import LS from '../../utils/localstorage';
import strings from '../../translations/strings';
import {
  BROWSER_LANGUAGE,
  BROWSER_COUNTRY,
} from '../../translations/constants';

const initialState = strings([
  LS.get('language') || BROWSER_LANGUAGE,
  LS.get('country') || BROWSER_COUNTRY,
]);

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.APP.CHANGE_LOCALE:
      return strings([action.language, action.country]);

    default: return state;
  }
};
