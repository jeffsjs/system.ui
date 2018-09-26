import instance from './config';

export const getProperties = ()=> {
  return instance.get('/properties');
}
export const getUsers = ()=> {
  return instance.get('/users');
}
export const getCustomers = ()=> {
  return instance.get('/customers');
}
export const getEnterprises = ()=> {
  return instance.get('/enterprises');
}
export const getMigration = ()=> {
  return instance.get('/migration');
}
export const getSummary = ()=> {
  return instance.get('/total');
}
export const getUserStatus = ()=> {
  return instance.get('/status');
}
export const postLogin = (params)=> {
  return instance.post('/authenticate', params);
}
export const getDownload = (param)=> {
  return instance.get(`/download/${param}`, {responseType: 'blob'});
}
export const postStatus = (param)=> {
  return instance.post(`/status/${param}`);
}
