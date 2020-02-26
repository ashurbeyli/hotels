import React from 'react';

import withSortByListData from "../withSortByListData";
import FilterItems from "../FilterItems/FilterItems";
import HotelsList from "../HotelsList/HotelsList";
import withHotelsListData from "../withHotelsListData";

import './App.css';

function App() {
  return (
    <div className="App-container">
      <div className="App-filter">{withSortByListData(FilterItems)}</div>
      <div className="App-hotels">{withHotelsListData(HotelsList)}</div>
    </div>
  );
}

export default App;
