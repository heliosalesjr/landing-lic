'use client' // app/components/Acc.jsx
import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function Acc() {
  

  return (
    <div className='max-w-5xl mx-auto'>
        <Accordion defaultExpandedKeys={["1"]}>
            <AccordionItem key="1" aria-label="Accordion 1" subtitle="Press to expand" title="Accordion 1" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700">
                <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=7u5rif8unf" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </AccordionItem>
            <AccordionItem key="2" aria-label="Accordion 2" subtitle="Press to expand" title="Accordion 1" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700">
            <iframe src="https://cdn.flipsnack.com/widget/v2/widget.html?hash=cnio385hp8" width="100%" height="600" seamless="seamless" scrolling="no" frameBorder="0" allowFullScreen allow="autoplay; clipboard-read; clipboard-write"></iframe>
            </AccordionItem>
            <AccordionItem key="3" aria-label="Accordion 3" subtitle="Press to expand" title="Accordion 1" className="hover:bg-sky-100 transition-colors duration-200 rounded-lg px-4 font-bold dark:hover:bg-sky-700">
                
            </AccordionItem>
        </Accordion>
    </div>
    
  );
}
