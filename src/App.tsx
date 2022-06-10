import React from 'react';
import "./style/reset.css"

import HeaderBar from "./components/HeaderBar/index"
import VacancyPage from "./components/VacancyPage/index"


function App() {
  return (
    <div className="App">
      <HeaderBar/>
      <VacancyPage/>
    </div>
  );
}

export default App;
