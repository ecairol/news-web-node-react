export const isAuthenticated = () => {
  return !!localStorage.getItem('authtoken');
}

export const storeToken = (token) => {
  localStorage.setItem('authtoken', token);
}

export const logout = () => {
  localStorage.removeItem('authtoken');
}