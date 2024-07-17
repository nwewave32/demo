import React from 'react';
import './App.css';

const ReactProject = () => (
  <div>
    <h2>React To-Do List</h2>
    <iframe
      src="/projects/react-todo/index.html"
      style={{ width: '100%', height: '500px', border: 'none' }}
      title="React To-Do List"
    ></iframe>
  </div>
);

const FlutterProject = () => (
  <div>
    <h2>Flutter Counter</h2>
    <iframe
      src="/projects/flutter-counter/index.html"
      style={{ width: '100%', height: '500px', border: 'none' }}
      title="Flutter Counter"
    ></iframe>
  </div>
);

const ReactNativeProject = () => (
  <div>
    <h2>React Native Counter</h2>
    <iframe
      src="https://snack.expo.dev/rJUR19xSZizU-flOskLa6"
      style={{ width: '100%', height: '500px', border: 'none' }}
      title="React Native Counter"
    ></iframe>
  </div>
);

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <ReactProject />
      <FlutterProject />
      <ReactNativeProject />
    </div>
  );
}

export default App;
