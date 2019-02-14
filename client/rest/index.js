import axios from 'axios';
import qs from 'querystring';
import { isNil } from 'ramda';
import { store } from '../components/core/AppContainer/component';


const {
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET,
  REACT_APP_SERVER_URL,
} = process.env;


const buildUrl = (url, query) => (
  !isNil(query) && !isNil(query)
    ? `${url}?${qs.stringify(query)}`
    : url
);

const handleError = (err) => {
  const { request } = err;
  // const { dispatch } = store;
  // const state = store.getState();

  switch (request.status) {
    case 401: {
      // logout
      break;
    }
    case 403: {
      // show forbidden message
      break;
    }
    default:
      break;
  }
};

class Wrapper {
  constructor() {
    this.instance = axios.create({
      baseURL: REACT_APP_SERVER_URL,
    });

    this.instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.instance.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type, Accept';

    this.setLoginHeaders();
  }

  setLoginHeaders() {
    const authKey = window.btoa(`${REACT_APP_CLIENT_ID}:${REACT_APP_CLIENT_SECRET}`);
    this.instance.defaults.headers.common.Authorization = `Basic ${authKey}`;
  }

  setBearerToken(token) {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  get(url, query = null, config = {}) {
    return this.wrapInPromise(() => this.instance.get(buildUrl(url, query), config));
  }

  post(url, body = {}, query = null, config = {}) {
    return this.wrapInPromise(() => this.instance.post(buildUrl(url, query), body, config));
  }

  put(url, body = {}, query = null, config = {}) {
    return this.wrapInPromise(() => this.instance.put(buildUrl(url, query), body, config));
  }

  patch(url, body = {}, query = null, config = {}) {
    return this.wrapInPromise(() => this.instance.patch(buildUrl(url, query), body, config));
  }

  delete(url, body = {}, query = null, config = {}) {
    return this.wrapInPromise(() => this.instance.delete(buildUrl(url, query), body, config));
  }
}

export default new Wrapper();
