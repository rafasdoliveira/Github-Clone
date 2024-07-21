import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
import useClickOutside from '../../hooks/useClickOutside';

interface SearchInputProps {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClose: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChange,
  value,
  onClose,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, onClose);

  return (
    <div className="w-full fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50 text-black">
      <div
        ref={ref}
        className="relative w-4/5 bg-white p-4 rounded-lg shadow-lg translate-y-2"
      >
        <div
          className={`flex items-center relative w-full h-12 text-userText gap-1 border ${
            isFocused ? 'border-blue-500' : 'border-gray-300'
          } rounded-md shadow-sm`}
        >
          <div className="ml-3">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full h-10 pl-4 focus:border-transparent focus:outline-none"
          />
          <div className="mr-3 cursor-pointer" onClick={onClose}>
            <IoCloseCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
