import React, { useEffect } from 'react';

export default function BadgesSection() {
  useEffect(() => {
    // Cargar el script de Credly
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary text-center">
        Digital Badges
      </h2>
      
      <div className="flex justify-center">
        <div 
          data-iframe-width="150" 
          data-iframe-height="270" 
          data-share-badge-id="43d5f167-eb2a-4667-9f22-bcb6180b0c32" 
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </section>
  );
}