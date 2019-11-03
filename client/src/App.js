import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>About</h2>
        <div className='content'>
          <div className='image-box'>
            <img src='' alt='alt' />
          </div>
          <div className='text-box'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eaque inventore, eveniet voluptates consequatur odio laborum quam reiciendis, corporis id culpa harum quia, libero placeat aliquid magnam? Laboriosam, delectus autem?</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}