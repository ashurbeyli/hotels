import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FilterItem.css';

const FilterItem = ({ id, text, icon, sortBy, setSortBy }) => {
    const className = `filter-item ${sortBy === id ? 'selected': ''}`;

    return <button
        className={className}
        onClick={() => setSortBy(id)}
    >
        <span>sort by <strong>{text}</strong></span>
        <FontAwesomeIcon className="filter-item__icon" icon={icon}/>
    </button>;
};

FilterItem.DisplayName = 'FilterItem';

export default FilterItem;