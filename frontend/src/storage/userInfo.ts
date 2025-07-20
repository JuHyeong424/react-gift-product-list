export const saveUserInfo = (data: { email: string; name: string; authToken: string }) => {
  localStorage.setItem('userInfo', JSON.stringify(data));
};

export const getUserInfo = () => {
  const stored = localStorage.getItem('userInfo');
  return stored ? JSON.parse(stored) : null;
};

export const clearUserInfo = () => {
  localStorage.removeItem('userInfo');
};
