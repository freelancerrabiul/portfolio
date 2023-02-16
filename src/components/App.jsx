import React from 'react';
import Nav from './pages/Nav';
import Home from './pages/Home.jsx';
import Work from './pages/Work';
import Contact from './pages/Contact';
import projects from './data.js';

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
      {projects.map(({ id, title, about, description, image }) => (
        <Work
          key={id}
          title={title}
          about={about}
          description={description}
          image={image}
        />
      ))}
      <Contact />
    </div>
  );
};

export default App;
