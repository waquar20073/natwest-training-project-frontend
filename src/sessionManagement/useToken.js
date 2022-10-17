import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken,accountId, ownerName) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    localStorage.setItem('accountId', String(accountId));
    localStorage.setItem('ownerName', String(ownerName));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}