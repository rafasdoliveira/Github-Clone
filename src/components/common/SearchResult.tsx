import React from 'react';

interface SearchResultProps {
  result: string;
  onClose: () => void;
}

export const SearchResult: React.FC<SearchResultProps> = ({
  result,
  onClose,
}) => {
  const handleResultClick = () => {
    sessionStorage.setItem('selectedUser', result);
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
