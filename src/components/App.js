import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

const user = {
  name: "John Doe",
  city: "New York",
  bio: "A passionate developer.",
  links: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  color: "firebrick"
};

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} github={user.links.github} linkedin={user.links.linkedin} />
    </div>
  );
}

export default App;
