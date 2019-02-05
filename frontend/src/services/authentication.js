export const isAuthenticated = () => {
  return !!localStorage.getItem('authtoken');
}