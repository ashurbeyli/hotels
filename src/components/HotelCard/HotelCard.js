import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IMAGE_PATH } from '../../common/constants/filePaths';
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";
import Rating from "../../common/components/Rating/Rating";

import './HotelCard.css';

const HotelCard = ({image, title, area, rating, price, adults, children, infant, date, days, departFrom, showDescription}) =>
    <div className="hotel-card">
        <div className="hotel-card__main">
            <div className="hotel-card__main__image-section" style={{backgroundImage: `url(${IMAGE_PATH}${image})`}} />
            <div className="hotel-card__main__info">
                <div className="hotel-card__main__info__title">{title}</div>
                <div className="hotel-card__main__info__area-name">{area}</div>
                <div className="hotel-card__main__info__rating">
                    <Rating rating={rating} />
                </div>
                <p><strong>{adults}</strong> adults, <strong>{children}</strong> children & <strong>{infant}</strong> infant</p>
                <p><strong>{date}</strong> for <strong>{days} days</strong></p>
                <p>departing from <strong>{departFrom}</strong></p>
                <button className="hotel-card__main__info__book-button">
                    Book now
                    <div className="hotel-card__main__info__book-button__price">${price}</div>
                </button>
            </div>
        </div>
        <div className="hotel-card__description">
            <button className="hotel-card__description__read-more-button">
                <strong>Read more</strong> about this hotel <FontAwesomeIcon className="hotel-card__description__read-more-button__icon" icon={showDescription ? faAngleUp : faAngleDown} />
            </button>
            <div className="hotel-card__description__overview" style={{display: showDescription ? 'block' : 'none'}}>
                <p className="hotel-card__description__overview__title"><strong>Overview</strong></p>
                Lorem ipsum dolar lorem ipsum lorem ipsum
            </div>
        </div>
    </div>;

export default HotelCard;