import React, {useState,useEffect} from "react";
import { CountryList } from "./components/CountryList";
import {ActionList} from './components/ActionsList'
import {Header} from './components/Header'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq) {
    setDarkMode(mq.matches)
    setChecked(mq.matches)
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
    return () => {
      mq.removeListener(changeMedia)
    }
  }, [])

  return (
    <div>
      <main className={mainClass}>
        <Header />
        <ActionList/>
        <CountryList/>
      </main>
    </div>
  );
}

export default App;
