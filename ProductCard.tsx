import React, { useState } from 'react';
import type { Product, PricingOption } from '../types';

const DropdownItem: React.FC<{ item: PricingOption }> = ({ item }) => {
  const commonClasses = "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100";
  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {item.text}
      </a>
    );
  }
  return <p className={`${commonClasses} cursor-default`}>{item.text}</p>;
};


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <img src={product.imageSrc} alt={product.title} className="w-full h-auto object-cover rounded-t-lg aspect-square" />
      <div className="text-center mt-4 flex-grow">
        <h3 className="font-spartan text-[20px] font-bold text-gray-800">{product.title}</h3>
        <p className="font-poppins text-[12px] text-gray-600 mt-2 min-h-[3rem]">{product.description}</p>
      </div>
      <div className="mt-4 w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-transparent border-2 border-filo-dark-blue text-filo-dark-blue font-button uppercase text-[12px] py-2 px-4 rounded hover:bg-filo-dark-blue hover:text-white transition-colors duration-300"
        >
          Compre Aqui
        </button>
        {isOpen && (
          <div 
            className="absolute z-10 mt-2 w-full max-w-lg rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none left-1/2 -translate-x-1/2 origin-top-right"
            style={{ width: 'calc(100% + 40px)' }}
           >
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {product.pricingOptions.map((option, index) => (
                <DropdownItem key={index} item={option} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
