import React from 'react';
import './App.css';
import { SaveProvider } from './components/context/SaveContext';
import Timer from './components/timer/Timer';
import Times from './components/times/Times';
import useSave from './hooks/useSave';

function App() {
  const {saves, changeSaves, clearSaved} = useSave();
  
  return (
    <div className="container">
      <SaveProvider value={changeSaves}>
        <Timer />
        <Times savedTimes={saves} clearSaved={clearSaved} />
      </SaveProvider>
    </div>
  );
}

export default App;
