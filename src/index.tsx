import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

// components
import Hello from './components/Hello.tsx';

ReactDOM.render(
  <Hello name="Alessa" enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);
