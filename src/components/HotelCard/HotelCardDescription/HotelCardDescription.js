import React, {useState} from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";

import './HotelCardDescription.css';

const HotelCardDescription = ({ description }) => {
    const [showDescription, setShowDescription] = useState(false);

    return <div className="hotel-card__description">
        <button
            className="hotel-card__description__read-more-button"
            onClick={() => setShowDescription(!showDescription)}
        >
            <strong>Read more</strong> about this hotel <FontAwesomeIcon
            className="hotel-card__description__read-more-button__icon"
            icon={showDescription ? faAngleUp : faAngleDown}/>
        </button>
        <div className="hotel-card__description__overview" style={{display: showDescription ? 'block' : 'none'}}>
            <p className="hotel-card__description__overview__title"><strong>Overview</strong></p>
            {description}
        </div>
    </div>;
};

export default HotelCardDescription;