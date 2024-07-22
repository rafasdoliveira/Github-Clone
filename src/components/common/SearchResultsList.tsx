import React, { useRef } from 'react';
import { SearchResult } from './SearchResult';
import useClickOutside from '../../hooks/useClickOutside';

interface User {
  name: string;
}

interface SearchResultsListProps {
  results: User[];
  onClose: () => void;
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  onClose,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);

  return (
    <div
      className="w-[1150px] fixed top-24 left-1/2 -translate-x-1/2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 text-black"
      ref={ref}
    >
      <div className="p-4">
        {results.length > 0 ? (
          results.map((result, index) => (
            <SearchResult result={result.name} key={index} onClose={onClose} />
          ))
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsList;
