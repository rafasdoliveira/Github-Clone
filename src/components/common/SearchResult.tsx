import React from 'react';
import { useSelectedUser } from '../../context/SelectedUserContext';

interface SearchResultProps {
  result: string;
  onClose: () => void;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  result,
  onClose,
}) => {
  const { setSelectedUser } = useSelectedUser();

  const handleResultClick = () => {
    setSelectedUser(result);
    onClose();
  };

  return (
    <div
      className="search-result p-2 cursor-pointer hover:bg-gray-100"
      onClick={handleResultClick}
    >
      {result}
    </div>
  );
};
