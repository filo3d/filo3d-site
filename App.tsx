
import React, { useRef } from 'react';
import ProductCard from './components/ProductCard';
import CrownIcon from './components/icons/CrownIcon';
import { POP_PRODUCTS, POSSIBILITIES } from './constants';

const App: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-filo-light-blue w-full overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative bg-filo-light-blue py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="absolute top-8 left-8">
                <img src="https://i.imgur.com/mz6v5Xw.png" alt="Filô Logo" className="w-24 h-auto"/>
            </div>
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="font-spartan font-bold text-gray-800 text-4xl md:text-5xl" style={{fontSize: '37px'}}>
                        Transformamos ideias em objetos reais com impressão 3D
                    </h1>
                    <p className="font-poppins text-gray-600 mt-4 md:text-xl" style={{fontSize: '24px'}}>
                        Personalização, criatividade e tecnologia ao seu alcance
                    </p>
                    <button 
                        onClick={scrollToContact}
                        className="mt-8 bg-transparent border border-gray-800 text-gray-800 font-sans uppercase tracking-wider py-3 px-8 text-xs font-bold hover:bg-gray-800 hover:text-white transition-colors duration-300">
                        ORÇAMENTOS
                    </button>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                    <img src="https://i.imgur.com/8lyI3iG.jpeg" alt="3D Printed Objects" className="rounded-lg shadow-2xl w-full max-w-md"/>
                </div>
            </div>
        </section>

        {/* About Section */}
        <section className="bg-filo-dark-blue text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex justify-center">
              <img src="https://i.imgur.com/0Kx68pO.png" alt="Jessica and Tiago 3D Models" className="w-full max-w-md"/>
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="font-spartan font-bold text-4xl md:text-5xl" style={{fontSize: '37px'}}>Por que “Filô”?</h2>
              <p className="font-poppins mt-4 text-base md:text-lg" style={{fontSize: '17px'}}>
                Somos Jéssica e Tiago, um casal que vivencia arte em nossas profissões. Dessa união, nasceu nossa empresa de impressão 3D, onde visamos criar e facilitar a vida do indivíduo com técnica, carinho e atenção a cada detalhe. São filamentos dando vida à sua ideia, e por isso, somos a Filô!
              </p>
            </div>
          </div>
        </section>

        {/* Pop Line Section */}
        <section className="bg-filo-light-blue py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h2 className="font-spartan font-bold text-gray-800 text-4xl md:text-5xl mb-12" style={{fontSize: '40px'}}>Linha POP!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {POP_PRODUCTS.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Possibilities Section */}
        <section className="bg-filo-light-blue py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <h2 className="text-center font-spartan font-bold text-gray-800 text-4xl md:text-5xl mb-12" style={{fontSize: '40px'}}>Mil e uma possibilidades</h2>
                <div className="space-y-12">
                    {POSSIBILITIES.map((item, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                            <div className="md:w-1/3 flex justify-center">
                                <img src={item.imageSrc} alt={item.title} className="w-full max-w-xs rounded-lg shadow-lg" />
                            </div>
                            <div className="md:w-2/3 text-center md:text-left">
                                <h3 className="font-spartan font-bold text-gray-800 text-2xl" style={{fontSize: '18px'}}>{item.title}</h3>
                                <p className="font-poppins text-gray-600 mt-2" style={{fontSize: '14px'}}>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Showcase Section */}
        <section className="bg-filo-light-blue py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
                <img src="https://i.imgur.com/8WaYOjp.png" alt="Showcase 1" className="w-full md:w-auto max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"/>
                <img src="https://i.imgur.com/1hYpMyZ.png" alt="Showcase 2" className="w-full md:w-auto max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg"/>
            </div>
        </section>

        {/* Logo Banner Section */}
        <section style={{backgroundImage: "url('https://i.imgur.com/U8nGddC.png')"}} className="bg-cover bg-center h-48 md:h-64"></section>
        
        {/* Contact Section */}
        <footer ref={contactRef} className="bg-filo-dark-blue text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-shrink-0">
                    <img src="https://i.imgur.com/HsJFZnR.png" alt="Dog Model" className="w-64 h-auto"/>
                </div>
                <div className="text-center md:text-left">
                    <div className="flex flex-col items-center mb-8">
                        <CrownIcon className="w-16 h-16 text-yellow-400" />
                        <img src="https://i.imgur.com/mz6v5Xw.png" alt="Filô Logo" className="w-32 h-auto -mt-4"/>
                    </div>
                    <h2 className="font-spartan font-bold text-4xl md:text-5xl mb-8" style={{fontSize: '40px'}}>Entre em contato</h2>
                    <div className="space-y-4 font-poppins">
                        <div>
                            <h3 className="font-semibold text-xl" style={{fontSize: '20px'}}>Instagram</h3>
                            <a href="https://www.instagram.com/_filo3d" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{fontSize: '14px'}}>www.instagram.com/_filo3d</a>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl" style={{fontSize: '20px'}}>E-mail</h3>
                            <a href="mailto:filo3d.contato@gmail.com" className="text-sm hover:underline" style={{fontSize: '14px'}}>filo3d.contato@gmail.com</a>
                        </div>
                        <div>
                            <h3 className="font-semibold text-xl" style={{fontSize: '20px'}}>WhatsApp</h3>
                            <p className="text-sm" style={{fontSize: '14px'}}>+55 24 98116-0108</p>
                            <p className="text-sm" style={{fontSize: '14px'}}>+55 24 99921-6805</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
