import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>LookTease</h1>
        <nav>
            <ul>
                <li>About</li>
                <li>Shop</li>
                <li>Contact</li>
            </ul>
        </nav>
      </header>
      <main>
          <h2>About</h2>
          <div class='content'>
              <div class='image-box'>
                  <img src='' alt='alt'/>
              </div>
              <div class='text-box'>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem eaque inventore, eveniet voluptates consequatur odio laborum quam reiciendis, corporis id culpa harum quia, libero placeat aliquid magnam? Laboriosam, delectus autem?</p>
              </div>
          </div>
      </main>
      <footer>
        {()=> (<p>2019 Eva Lieu</p>)}
      </footer>
    </div>
  );
}

export default App;
