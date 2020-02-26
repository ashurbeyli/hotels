import React from 'react';

import './FilterItems.css';
import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ items }) => {
    return <div className="Filter-items">
        {items.map(data => <FilterItem {...data} />)}
    </div>
};

export default FilterItems;