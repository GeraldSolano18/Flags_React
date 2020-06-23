import React from "react";
import { CountryList } from "./components/CountryList";
import {ActionList} from './components/ActionsList'
import {Header} from './components/Header'


function App() {
  return (
    <div>
      <Header />
      <ActionList/>
      <CountryList/>
    </div>
  );
}

export default App;
