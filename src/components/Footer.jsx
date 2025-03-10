import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-6 text-white px-[100px]">
      <div>© Rehan Raihan - 2023</div>

      <div className="flex gap-4">
        <a 
          href="https://dribbble.com/tags/login" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Dribbble
        </a>
        <a 
          href="https://www.behance.net/gallery/58902999/Login?locale=en_US" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Behance
        </a>
        <a 
          href="https://x.com/anujshr17835959" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Twitter
        </a>
        <a 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Footer;
