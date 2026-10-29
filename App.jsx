```jsx
import React from "react";
import "./App.css";

function App() {
  const handleGetStarted = () => {
    window.location.href = "/plants";
  };

  return (
    <div className="app">
      <div className="landing-page">
        <div className="landing-content">
          <h1>Paradise Nursery</h1>
          <p>Bring nature into your home with beautiful houseplants.</p>

          <button onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
```
