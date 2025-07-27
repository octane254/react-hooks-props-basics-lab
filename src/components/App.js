import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
const user = {
  name: "John Doe",
  bio: "A passionate developer.",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe"
};
function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} />
      <About bio={user.bio} github={user.github} linkedin={user.linkedin} />
    </div>
  );
}
export default App;