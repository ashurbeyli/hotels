import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FilterItem.css';

const FilterItem = ({ text, icon }) => <div className="Filter-item">
    <span>sort by <strong>{text}</strong></span>
    <FontAwesomeIcon className="Filter-icon" icon={icon} />
</div>;

export default FilterItem;