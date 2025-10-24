
import React, { useRef } from 'react';
import { PRODUCTS, POSSIBILITIES } from './constants';
import DropdownButton from './components/DropdownButton';

const FiloLogo = () => (
    <img src="https://i.imgur.com/uGzX60L.png" alt="Filô Logo" className="h-12 md:h-16" />
);


const Header: React.FC = () => {
    return (
        <header className="bg-filo-blue p-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-center items-center">
                <img src="https://i.imgur.com/gAftz2O.png" alt="Filô Logo" className="h-10" />
            </div>
        </header>
    );
}

const HeroSection: React.FC<{ onBudgetClick: () => void }> = ({ onBudgetClick }) => (
  <section className="bg-filo-light-blue py-16 px-4">
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-spartan font-bold text-filo-dark mb-4 leading-tight">
          Transformamos ideias em objetos reais com impressão 3D
        </h1>
        <p className="text-xl md:text-2xl font-poppins text-gray-600 mb-8">
          Personalização, criatividade e tecnologia ao seu alcance
        </p>
        <button
          onClick={onBudgetClick}
          className="bg-filo-blue text-white font-proxima uppercase px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Orçamentos
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src="https://i.imgur.com/3N4oGML.png" alt="Produto 3D" className="max-w-sm md:max-w-md w-full rounded-lg shadow-2xl" />
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="bg-filo-blue py-16 px-4">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center items-center order-last md:order-first">
        <img src="https://i.imgur.com/Kx201Ea.png" alt="Jéssica e Tiago" className="max-w-sm md:max-w-md w-full rounded-lg shadow-2xl" />
      </div>
      <div className="text-center md:text-left text-white">
        <h2 className="text-4xl md:text-5xl font-spartan font-bold mb-4">
          Por que “Filô”?
        </h2>
        <p className="font-poppins text-lg leading-relaxed">
          Somos Jéssica e Tiago, um casal que vivencia arte em nossas profissões.
          Dessa união, nasceu nossa empresa de impressão 3D, onde visamos criar e facilitar a vida do individuo com técnica, carinho e atenção a cada detalhe. São filamentos dando vida à sua ideia, e por isso, somos a Filô!
        </p>
      </div>
    </div>
  </section>
);

const PopSection: React.FC = () => (
  <section className="bg-filo-light-blue py-16 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-spartan font-bold text-filo-dark mb-12">
        Linha POP!
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-spartan font-bold text-filo-dark">{product.title}</h3>
            <p className="font-poppins text-gray-600 mb-4 h-12">{product.subtitle}</p>
            <DropdownButton items={product.dropdownItems} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PossibilitiesSection: React.FC = () => (
  <section className="bg-white py-16 px-4">
    <div className="container mx-auto">
      <h2 className="text-5xl font-spartan font-bold text-filo-dark text-center mb-12">
        Mil e uma possibilidades
      </h2>
      <div className="space-y-12">
        {POSSIBILITIES.map((item, index) => (
          <div key={item.title} className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 !== 0 ? 'md:grid-flow-row-dense' : ''}`}>
            <div className={`flex justify-center ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
              <img src={item.image} alt={item.title} className="max-w-sm w-full rounded-lg shadow-xl" />
            </div>
            <div className={`text-center md:text-left ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
              <h3 className="text-2xl font-spartan font-bold text-filo-dark">{item.title}</h3>
              <p className="font-poppins text-gray-600">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const GallerySection: React.FC = () => (
    <section className="py-16 px-4 bg-repeat" style={{ backgroundImage: "url('https://i.imgur.com/e5VwIPr.png')" }}>
        <div className="container mx-auto grid md:grid-cols-3 gap-4">
            <img src="https://i.imgur.com/39Nqj9p.jpeg" alt="Impressão 3D 1" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform"/>
            <img src="https://i.imgur.com/E0l8SJf.png" alt="Impressão 3D 2" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform md:mt-16"/>
            <img src="https://i.imgur.com/5uLJl9R.jpeg" alt="Impressão 3D 3" className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform"/>
        </div>
    </section>
);

const ContactSection: React.FC<{ sectionRef: React.RefObject<HTMLElement> }> = ({ sectionRef }) => (
  <section ref={sectionRef} className="bg-filo-blue py-16 px-4 text-white">
    <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-center">
        <img src="https://i.imgur.com/pYqf9q3.jpeg" alt="Produto de contato" className="max-w-xs w-full rounded-lg shadow-2xl" />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-5xl font-spartan font-bold mb-8">Entre em contato</h2>
        <div className="space-y-4 font-poppins">
          <div>
            <h3 className="text-2xl font-semibold">Instagram</h3>
            <a href="https://www.instagram.com/_filo3d" target="_blank" rel="noopener noreferrer" className="text-lg opacity-80 hover:opacity-100">www.instagram.com/_filo3d</a>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">E-mail</h3>
            <p className="text-lg opacity-80">filo3d.contato@gmail.com</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">WhatsApp</h3>
            <p className="text-lg opacity-80">+55 24 98116-0108</p>
            <p className="text-lg opacity-80">+55 24 99921-6805</p>
          </div>
        </div>
        <img src="https://i.imgur.com/gAftz2O.png" alt="Filô Logo" className="h-10 mt-8 mx-auto md:mx-0" />
      </div>
    </div>
  </section>
);


const App: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);

  const handleScrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-filo-light-blue text-filo-dark">
        <Header />
        <main>
            <HeroSection onBudgetClick={handleScrollToContact} />
            <AboutSection />
            <PopSection />
            <PossibilitiesSection />
            <GallerySection />
            <ContactSection sectionRef={contactRef} />
        </main>
    </div>
  );
};

export default App;
