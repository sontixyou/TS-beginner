import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <LikeButton />
    </div>
  );
}

function LikeButton() {
  const [count, setCount] = useState(0);
  const handleLikeClick = () => {
    setCount(count + 1);
  };

  return (
    <span className="likeButton" onClick={handleLikeClick}>♡　{count}</span>
  );
}
export default App;
