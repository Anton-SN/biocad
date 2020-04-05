import React from 'react';
import Router from './components/Router';
import styles from './App.module.css';
import './fonts/fonts.css';

function App() {
  return (
    <div className={styles.Content}>
      <Router />
    </div>
  );
}

export default App;
