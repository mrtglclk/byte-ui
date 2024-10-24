import React from 'react';

const MenuScraper = () => {
  const scrapeMenu = () => {
    // Call the backend scraping API
    alert('Scraping menus...');
    // Add real API call to scrape menus here
  };

  return (
    <div className="menu-scraper">
      <h2>Scrape Menus</h2>
      <button onClick={scrapeMenu}>Scrape Now</button>
    </div>
  );
};

export default MenuScraper;
