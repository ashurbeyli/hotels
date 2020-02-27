import React from 'react';

import withSortByListData from "../withSortByListData";
import FilterItems from "../FilterItems/FilterItems";
import HotelsList from "../HotelsList/HotelsList";
import withHotelsListData from "../withHotelsListData";

import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-container__filter-section">{withSortByListData(FilterItems)}</div>
      <div className="app-container__hotels-section">{withHotelsListData(HotelsList)}</div>
    </div>
  );
}

export default App;
