import React from 'react';

import withSortByListData from "../withSortByListData";
import FilterItems from "../FilterItems/FilterItems";

import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-filter">{withSortByListData(FilterItems)}</div>
      <div className="App-hotels">hotels list</div>
    </div>
  );
}

export default App;
