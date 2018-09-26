module.exports = {
  get baseURL() {
    return 'http://localhost:8080/api';
  },
  get authToken() {
    return sessionStorage.getItem('accounts_token');
  }
}
