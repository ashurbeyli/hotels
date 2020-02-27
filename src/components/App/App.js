import React, { useState } from 'react';
import { compose } from 'lodash/fp';

import withSortByListData from "../withSortByListData";
import FilterItems from "../FilterItems/FilterItems";
import HotelsList from "../HotelsList/HotelsList";
import withHotelsListData from "../withHotelsListData";
import withSortBySetter from "../withSortBySetter";
import withSortBy from "../withSortBy";

import './App.css';

const App = () => {
    const [sortBy, setSortBy] = useState();
    const FilterSection = compose(
        withSortBy(sortBy),
        withSortBySetter(setSortBy),
        withSortByListData
    )(FilterItems);
    const HotelsSection = compose(
        withSortBy(sortBy),
        withHotelsListData
    )(HotelsList);

    return (
        <div className="app-container">
              <div className="app-container__filter-section"><FilterSection/></div>
              <div className="app-container__hotels-section"><HotelsSection /></div>
        </div>
    );
};

App.DisplayName = 'App';

export default App;
