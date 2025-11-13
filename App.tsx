import React from 'react';
import { ExternalLinkIcon } from './components/icons';

const inspirationLinks = [
  { name: 'GENCUP', href: 'https://www.gencup.art/' },
  { name: 'JULIA POLONI', href: 'https://cargocollective.com/juliapoloni' },
  { name: 'RAFA POLONI', href: 'https://www.rafapoloni.com/' },
  { name: 'ZEH FERNANDES', href: 'https://zehfernandes.com/' },
];

const App: React.FC = () => {
  return (
    <div className="bg-black text-gray-200 min-h-screen w-full">
      <main className="w-full flex flex-col lg:flex-row pb-16">
        {/* Left Section */}
        <section className="w-full lg:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16 min-h-[50vh] lg:min-h-screen">
          <header>
            <h1 className="font-cinzel-decorative font-bold text-[7rem] md:text-[9rem] lg:text-[11rem] text-white leading-none tracking-tight">
              FIFART
            </h1>
            <p className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed tracking-wide">
              A generative art project that creates beautiful posters using FIFA Women's World Cup 2023 data.
            </p>
          </header>

          <div className="my-12 lg:my-0 space-y-6 text-lg uppercase tracking-widest">
            <p>
              BY <a href="https://dibyanshu-luci.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">DIBYANSHU</a>
            </p>
            <div className="max-w-md">
              <p>
                INSPIRED FROM <a href={inspirationLinks[0].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">GENCUP</a> BY BY <a href={inspirationLinks[1].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">JULIA POLONI</a>, <a href={inspirationLinks[2].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">RAFA POLONI</a> AND <a href={inspirationLinks[3].href} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">ZEH FERNANDES</a>
              </p>
            </div>
          </div>

          <footer>
            <a href="http://fifart.art" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-lg uppercase tracking-widest group">
              <span>SEE ALL THE POSTERS</span>
              <ExternalLinkIcon className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </footer>
        </section>

        {/* Right Section - Poster */}
        <section className="w-full lg:w-1/2 h-[50vh] lg:h-screen flex items-center justify-center p-8 md:p-12">
          <figure className="w-full h-full">
            {/* User should replace this src with their poster image */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Logo_of_the_2023_FIFA_Women%27s_World_Cup.svg/800px-Logo_of_the_2023_FIFA_Women%27s_World_Cup.svg.png" 
              alt="Abstract poster for the Spain vs England final" 
              className="w-full h-full object-contain"
            />
             <figcaption className="sr-only">An abstract representation of the Spain vs England match with orange and blue horizontal bars.</figcaption>
          </figure>
        </section>
      </main>
      <footer className="fixed bottom-0 left-0 w-full bg-black text-gray-500 text-sm p-4 border-t border-gray-800">
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-1 text-left">
            <a href="https://github.com/dkconnect/fifart" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              github.com/dkconnect/fifart
            </a>
          </div>
          <div className="flex-1 text-center">
            2025 - FIFART
          </div>
          <div className="flex-1 text-right">
            FIFA Women's World Cup 2023
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;