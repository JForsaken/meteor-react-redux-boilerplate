import axios from '../index';


export const login = (query) => {
  axios.setLoginHeaders();
  return axios.post('uaa/oauth/token', {}, query);
};

export const fetchMe = () => (
  axios.get('hr-service/profiles/me')
);
