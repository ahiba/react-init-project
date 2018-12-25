import { request, sessionRequest, localRequest } from './axios';

export const getLogin = (url, param={}, config={}) => {
  return request(url, param, config);
}