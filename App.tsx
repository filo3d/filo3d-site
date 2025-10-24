import React from 'react';
import ProductCard from './components/ProductCard';
import { InstagramIcon, MailIcon, MessageSquareIcon } from './components/Icons';
import type { Product } from './types';

const FilaLogo = ({ className }: { className?: string }) => (
    <div className={`text-center ${className}`}>
        <span className="font-spartan text-6xl md:text-7xl font-bold text-gray-800 tracking-tight">Filô</span>
    </div>
);

const FilaLogoWhite = ({ className }: { className?: string }) => (
    <div className={`text-center ${className}`}>
        <span className="font-spartan text-6xl md:text-7xl font-bold text-white tracking-tight">Filô</span>
    </div>
);

// Constants for product data
const popProducts: Product[] = [
    {
        imageSrc: 'https://i.imgur.com/0FkMi7c.jpg',
        title: 'Pet Pop',
        description: 'Tenha o seu melhor amigo sempre por perto',
        pricingOptions: [
            { text: 'Pet Pop R$100,00 à vista via Pix 61524444000110' },
            { text: 'Pet Pop em até 12X com juros', link: 'https://mpago.la/2gKdo1C' }
        ]
    },
    {
        imageSrc: 'https://i.imgur.com/xPrCYhX.jpg',
        title: 'Love Pop (Individual)',
        description: 'Uma miniatura, infinitas lembranças',
        pricingOptions: [
            { text: 'Love Pop Individual R$120,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Individual com 01 adereço R$160,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Individual com 02 adereços R$200,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Individual com 03 adereços R$240,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Individual em até 12X com juros', link: 'https://mpago.la/1KeWCHH' },
            { text: 'Love Pop Individual com 01 adereço em até 12X com juros', link: 'https://mpago.la/2Jn9gPr' },
            { text: 'Love Pop Individual com 02 adereços em até 12X com juros', link: 'https://mpago.la/2SE87PE' },
            { text: 'Love Pop Individual com 03 adereços em até 12X com juros', link: 'https://mpago.la/1v727Tx' }
        ]
    },
    {
        imageSrc: 'https://i.imgur.com/iCZNdOt.jpg',
        title: 'Love Pop (Casal)',
        description: 'Surpreenda quem você ama',
        pricingOptions: [
            { text: 'Love Pop Casal R$180,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Casal com 01 adereço R$220,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Casal com 02 adereços R$260,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Casal com 03 adereços R$300,00 à vista via Pix 61524444000110' },
            { text: 'Love Pop Casal em até 12X com juros', link: 'https://mpago.la/33Yozgx' },
            { text: 'Love Pop Casal com 01 adereço em até 12X com juros', link: 'https://mpago.la/2s79L8v' },
            { text: 'Love Pop Casal com 02 adereços em até 12X com juros', link: 'https://mpago.la/2t6JB67' },
            { text: 'Love Pop Casal com 03 adereços em até 12X com juros', link: 'https://mpago.la/1DYUB6U' }
        ]
    }
];

// Data for possibilities section
const possibilities = [
    { imageSrc: 'https://i.imgur.com/BbfUuwt.jpg', title: 'Geek', description: 'Do seu mundo favorito direto pra sua estante.' },
    { imageSrc: 'https://i.imgur.com/Xt6HmBs.jpg', title: 'Divulga +', description: 'Itens personalizados que ajudam sua marca ir mais longe.' },
    { imageSrc: 'https://i.imgur.com/kcArYWz.jpg', title: 'Arquitetura', description: 'Maquetes 3D físicas para encantar seus clientes.' },
    { imageSrc: 'https://i.imgur.com/sksKGxz.jpg', title: 'Utilitários', description: 'Soluções práticas e inteligentes para facilitar o seu dia-a-dia.' },
    { imageSrc: 'https://i.imgur.com/ejo8fSX.jpg', title: 'Protótipos', description: 'Tem uma ideia e gostaria de tirá-la do papel? Manda pra gente!' }
];

const App: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-filo-light-blue min-h-screen flex flex-col items-center justify-center p-8">
                <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <FilaLogo />
                        <h1 className="font-spartan text-[37px] font-bold mt-4 leading-tight">Transformamos ideias em objetos reais com impressão 3D</h1>
                        <p className="font-poppins text-[24px] mt-4">Personalização, criatividade e tecnologia ao seu alcance</p>
                        <a href="#contato" className="mt-8 inline-block bg-transparent border-2 border-filo-dark-blue text-filo-dark-blue font-button uppercase text-[12px] py-3 px-8 rounded hover:bg-filo-dark-blue hover:text-white transition-colors duration-300">
                            Orçamentos
                        </a>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-center gap-4">
                        <img src="https://i.imgur.com/mz6v5Xw.jpg" alt="Caixa de presente personalizada" className="rounded-lg shadow-lg w-full max-w-md"/>
                        <img src="https://i.imgur.com/8lyI3iG.jpg" alt="Objetos impressos em 3D" className="rounded-lg shadow-lg w-full max-w-md"/>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-filo-dark-blue text-white py-20 px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://i.imgur.com/0Kx68pO.jpg" alt="Bonecos 3D de Jéssica e Tiago" className="rounded-lg shadow-2xl w-full" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="font-spartan text-[37px] font-bold">Por que “Filô”?</h2>
                        <p className="font-poppins text-[17px] mt-4 leading-relaxed">
                            Somos Jéssica e Tiago, um casal que vivencia arte em nossas profissões.
                            Dessa união, nasceu nossa empresa de impressão 3D, onde visamos criar e facilitar a vida do individuo com técnica, carinho e atenção a cada detalhe. São filamentos dando vida à sua ideia, e por isso, somos a Filô!
                        </p>
                    </div>
                </div>
            </section>

            {/* Pop Line Section */}
            <section className="bg-filo-light-blue py-20 px-8">
                <div className="container mx-auto text-center">
                    <h2 className="font-spartan text-[40px] font-bold mb-12">Linha POP!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Possibilities Section */}
            <section className="bg-filo-light-blue pt-10 pb-20 px-8">
                <div className="container mx-auto text-center">
                    <h2 className="font-spartan text-[40px] font-bold mb-12">Mil e uma possibilidades</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {possibilities.map((item, index) => (
                           <div key={index} className="flex flex-col sm:flex-row items-center text-left gap-6">
                               <img src={item.imageSrc} alt={item.title} className="w-48 h-32 object-cover rounded-lg shadow-lg flex-shrink-0"/>
                               <div>
                                   <h3 className="font-spartan text-[18px] font-bold">{item.title}</h3>
                                   <p className="font-poppins text-[14px] mt-2">{item.description}</p>
                               </div>
                           </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="py-20 px-8 bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: "url('https://i.imgur.com/U8nGddC.png')" }}
            >
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
                    <img src="https://i.imgur.com/8WaYOjp.png" alt="Depoimento 1" className="rounded-lg shadow-xl w-full max-w-xs" />
                    <img src="https://i.imgur.com/1hYpMyZ.png" alt="Depoimento 2" className="rounded-lg shadow-xl w-full max-w-xs" />
                    <img src="https://i.imgur.com/Qg1HkyJ.png" alt="Depoimento 3" className="rounded-lg shadow-xl w-full max-w-xs" />
                    <img src="https://i.imgur.com/HsJFZnR.png" alt="Depoimento 4" className="rounded-lg shadow-xl w-full max-w-xs" />
                </div>
            </section>
            
             {/* Logo Divider */}
            <div className="relative flex overflow-x-hidden bg-white py-4">
                <div className="py-2 animate-marquee whitespace-nowrap flex">
                    <span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span>
                </div>
                 <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap flex">
                    <span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span><span className="font-spartan text-4xl text-filo-dark-blue mx-4">Filô</span><span className="font-spartan text-4xl text-gray-400 mx-4">Filô</span>
                </div>
            </div>

            {/* Contact Section */}
            <footer id="contato" className="bg-filo-dark-blue text-white py-20 px-8">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 flex justify-center">
                        <img src="https://i.imgur.com/EaQ6pM5.png" alt="Cachorro de óculos impresso em 3D" className="rounded-lg w-full max-w-sm" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                         <FilaLogoWhite />
                        <h2 className="font-spartan text-[40px] font-bold mt-4">Entre em contato</h2>
                        <div className="mt-8 space-y-6">
                            <div>
                                <h3 className="font-poppins text-[20px] font-semibold flex items-center justify-center md:justify-start gap-2"><InstagramIcon /> Instagram</h3>
                                <a href="https://www.instagram.com/_filo3d" target="_blank" rel="noopener noreferrer" className="font-poppins text-[14px] hover:underline">www.instagram.com/_filo3d</a>
                            </div>
                             <div>
                                <h3 className="font-poppins text-[20px] font-semibold flex items-center justify-center md:justify-start gap-2"><MailIcon /> E-mail</h3>
                                <a href="mailto:filo3d.contato@gmail.com" className="font-poppins text-[14px] hover:underline">filo3d.contato@gmail.com</a>
                            </div>
                            <div>
                                <h3 className="font-poppins text-[20px] font-semibold flex items-center justify-center md:justify-start gap-2"><MessageSquareIcon /> WhatsApp</h3>
                                <p className="font-poppins text-[14px]">+55 24 98116-0108</p>
                                <p className="font-poppins text-[14px]">+55 24 99921-6805</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
