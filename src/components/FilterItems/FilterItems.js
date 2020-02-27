import React from 'react';

import FilterItem from "../FilterItem/FilterItem";

const FilterItems = ({ items, ...restProps }) => items.map(data => <FilterItem {...data} {...restProps} key={data.id} />);

FilterItems.DisplayName = 'FilterItems';

export default FilterItems;