import React from 'react';

import AppHeader from '../app-header';
import RecordAddForm from '../record-add-form';
import TrackerList from '../tracker-list';

import './app.css';

const App = () => {
  return (
    <>
    <AppHeader/>
    <RecordAddForm/>
    <TrackerList/>
    </>
  )
}

export default App;