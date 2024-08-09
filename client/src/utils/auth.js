import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    try {
      return decode(this.getToken());
    } catch (err) {
      console.error('Failed to decode token:', err);
      return null;
    }
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        localStorage.removeItem('id_token'); // Ensure the token is removed if expired
        console.log('Token expired and removed from localStorage');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Failed to verify token expiration:', err);
      localStorage.removeItem('id_token'); // Remove the token in case of error
      return true;
    }
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    console.log('Token stored:', idToken); // Debugging log
    window.location.assign('/home'); // Redirect to /home after login
  }

  logout() {
    localStorage.removeItem('id_token');
    console.log('Token removed, logging out'); // Debugging log
    window.location.assign('/'); // Redirect to the login page
  }
}

export default new AuthService();

