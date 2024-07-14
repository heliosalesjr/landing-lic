'use client' // app/components/Acc.jsx
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Acc() {
  

  return (
    <div className='p-8 dark:bg-slate-700'>
        <div className='text-center max-w-5xl mx-auto py-8'>
            <h1 className="text-4xl font-bold px-8 text-slate-800 dark:text-white">Acesso Rápido</h1>
            <p className="mt-4 text-lg px-8 text-slate-800 dark:text-white">
            Dentro da nossa plataforma, você encontrará todos os materiais de forma estruturada e organizada. No entanto, caso precise de algo específico imediatamente, basta clicar nos itens abaixo para acessar rapidamente o que procura.
            </p>
        </div>

        <div className='max-w-5xl mx-auto'>
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Vídeo Tutorial" subtitle="Clique para abrir" title="Vídeo Tutorial" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700">
                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7u5rif8unf" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Caderno do Estudante" subtitle="Clique para abrir" title="Manual de Acesso à Plataforma" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700">
                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=cnio385hp8" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </AccordionItem>
            
            
        </Accordion>
    </div>
    </div>
    
    
  );
}
