import React from 'react';
// import { Counter } from './features/counter/Counter';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import HomeScreen from './Pages/HomeScreen';

function App() {
  return (
    <div className="App bg-black pb-20">
      <Router>
        <Routes>
          <Route path="/" Component={HomeScreen}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
