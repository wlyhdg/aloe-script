import React from 'react';
import './App.css';
import { defaultTheme } from 'evergreen-ui';
import { ThemeProvider } from 'styled-components';
import Plants from './Plants/Plants';
import AddPlantForm from './Forms/AddPlantForm';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="aloe__app">
        <h1>Welcome to <span className="aloe__app__name">Aloe Script</span>.</h1>
        <h2> — Plantography — </h2>
        <Plants />

        <AddPlantForm />

      </div>
    </ThemeProvider>
  );
}

export default App;
