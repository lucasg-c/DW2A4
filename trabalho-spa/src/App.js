import './App.css';
import './styles/global.css'
import React from 'react';

import MainComponent from './components/MainComponent';

import DexComponent from './components/main/DexComponent';
import TeamviewerComponent from './components/main/TeamviewerComponent';
import EntriesComponent from './components/main/EntriesComponent';

import { Routes, Route} from 'react-router-dom';

export default class App extends React.Component
{
  render()
  {
    return(
      <>
      <div className="">
        <MainComponent/>
      </div>

      <React.Fragment>
        <Routes>
          <Route path="/" element={<MainComponent/>}>
            <Route index element={<DexComponent/>}/>
            <Route path="teamviewer" element={<TeamviewerComponent/>}/>
            <Route path="entries" element={<EntriesComponent/>}/>
          </Route>
        </Routes>
      </React.Fragment>
      </>
    )
  }
}
