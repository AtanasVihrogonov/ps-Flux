/* ==================================================
 The App Component will decide which page to render.
==================================================== */
import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import Header from './common/Header';

function App() {
  function getPage() {
    // read the URL to determine which page to render
    const route = window.location.pathname;

    if (route === '/about') return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;