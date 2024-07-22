import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SelectedUserContextProps {
  selectedUser: string | null;
  setSelectedUser: (user: string | null) => void;
}

const SelectedUserContext = createContext<SelectedUserContextProps | undefined>(
  undefined
);

export const SelectedUserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <SelectedUserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </SelectedUserContext.Provider>
  );
};

export const useSelectedUser = () => {
  const context = useContext(SelectedUserContext);
  if (context === undefined) {
    throw new Error(
      'useSelectedUser must be used within a SelectedUserProvider'
    );
  }
  return context;
};
