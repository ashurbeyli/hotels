import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FilterItem.css';

const FilterItem = ({ text, icon }) => <div className="filter-item">
    <span>sort by <strong>{text}</strong></span>
    <FontAwesomeIcon className="filter-item__icon" icon={icon} />
</div>;

export default FilterItem;