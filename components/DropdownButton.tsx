
import React, { useState, useEffect, useRef } from 'react';
import { DropdownItem } from '../types';

interface DropdownButtonProps {
  items: DropdownItem[];
}

const DropdownButtonItem: React.FC<{ item: DropdownItem }> = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const handlePixClick = (pixCode: string) => {
    navigator.clipboard.writeText(pixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (item.isPix && item.pixCode) {
    return (
      <button
        onClick={() => handlePixClick(item.pixCode!)}
        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
      >
        {item.text}
        <span className="block text-xs font-mono text-filo-blue">{copied ? 'Copiado!' : item.pixCode}</span>
      </button>
    );
  }

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors"
    >
      {item.text}
    </a>
  );
};


const DropdownButton: React.FC<DropdownButtonProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-filo-blue font-proxima uppercase"
          onClick={() => setIsOpen(!isOpen)}
        >
          Compre Aqui
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {items.map((item, index) => (
              <DropdownButtonItem key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
