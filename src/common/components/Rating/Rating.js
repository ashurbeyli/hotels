import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

import './Rating.css';

const Rating = ({ rating }) => [...Array(rating).keys()]
    .map(i => <FontAwesomeIcon className="rating-icon" key={i} icon={faStar} />);

export default Rating;