
import React, { useState, useRef, useEffect } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

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
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
      <img src={product.imageSrc} alt={product.title} className="w-full h-64 object-contain mb-4"/>
      <h3 className="font-spartan font-bold text-gray-800 text-xl" style={{fontSize: '20px'}}>{product.title}</h3>
      <p className="font-poppins text-gray-600 my-2 text-sm" style={{fontSize: '12px'}}>{product.description}</p>
      <div className="relative mt-auto" ref={dropdownRef}>
        <button 
          onClick={toggleDropdown}
          className="bg-transparent border border-gray-800 text-gray-800 font-sans uppercase tracking-wider py-3 px-8 text-xs font-bold hover:bg-gray-800 hover:text-white transition-colors duration-300">
          COMPRE AQUI
        </button>
        {isOpen && (
          <div className="absolute z-10 bottom-full mb-2 w-72 md:w-80 lg:w-96 bg-white border border-gray-200 rounded-lg shadow-xl right-1/2 translate-x-1/2">
            <ul className="py-2 text-left">
              {product.purchaseOptions.map((option, index) => (
                <li key={index}>
                  {option.link ? (
                    <a
                      href={option.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 whitespace-normal"
                    >
                      {option.text}
                    </a>
                  ) : (
                    <span className="block px-4 py-2 text-sm text-gray-700 whitespace-normal">{option.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
