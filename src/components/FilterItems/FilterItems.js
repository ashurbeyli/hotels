import React from 'react';

import './FilterItems.css';
import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ items }) => <div className="Filter-items">
    {items.map(data => <FilterItem {...data} key={data.sortBy}/>)}
</div>;

export default FilterItems;