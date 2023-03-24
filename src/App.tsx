import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";

type NavItem = {
  label: string;
  link: string;
};

const items: NavItem[] = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

function App(){
  return (
      <div>
        <Navbar items={items} />
        {/* rest of the app */}
      </div>
  );
}

export default App;
