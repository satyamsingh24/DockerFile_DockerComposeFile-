import React from 'react';
import ReactDOM from 'react-dom/client';

// Ye App component bhi minimal banate hai
function App() {
  return (
    <div>
      <h1>Hello, React Frontend is running!</h1>
    </div>
  );
}

// Root render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
