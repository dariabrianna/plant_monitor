import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  // user===null înseamnă logged out; când e object → logged in
  const [user, setUser] = useState(null);

  const login = userData => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateEmail = newEmail => {
    if (user) setUser(prev => ({ ...prev, email: newEmail }));
  };

  const updateProfilePicture = pictureData => {
    if (user) setUser(prev => ({ ...prev, profilePicture: pictureData }));
  };

  const updatePassword = (oldPass, newPass) => {
    // TODO: apel backend
    console.log('Change password', { oldPass, newPass });
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      updateEmail,
      updateProfilePicture,
      updatePassword
    }}>
      {children}
    </AuthContext.Provider>
  );
}
