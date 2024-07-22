import React, {
  useState,
  useRef,
  ChangeEvent,
  useEffect,
  useCallback,
} from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoCloseCircle } from 'react-icons/io5';
// import useClickOutside from '../../hooks/useClickOutside';

interface User {
  name: string;
}
interface SearchInputProps {
  setResults: (results: User[]) => void;
  placeholder?: string;
  onClose: () => void;
  value: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onClose,
  setResults,
  // value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [input, setInput] = useState<string>('');
  const ref = useRef<HTMLDivElement>(null);

  // useClickOutside(ref, onClose);

  const fetchData = useCallback(
    (value: string) => {
      fetch(`https://api.github.com/users/${value}`)
        .then(response => response.json())
        .then((json: User) => {
          const results = json && json.name ? [json] : [];
          console.log(results);
          sessionStorage.setItem('results', JSON.stringify(results));
          setResults(results);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setResults([]);
        });
    },
    [setResults]
  );

  useEffect(() => {
    if (input) {
      fetchData(input);
    } else {
      setResults([]);
    }
  }, [input, fetchData, setResults]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInput(value);
  };

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
            onChange={handleChange}
            value={input}
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
