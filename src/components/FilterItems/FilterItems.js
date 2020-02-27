import React from 'react';

import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ items }) => items.map(data => <FilterItem {...data} key={data.sortBy}/>);

export default FilterItems;