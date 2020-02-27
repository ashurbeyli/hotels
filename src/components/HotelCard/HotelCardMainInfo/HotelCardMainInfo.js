import React from "react";

import Rating from "../../../common/components/Rating/Rating";

import './HotelCardMainInfo.css';

const HotelCardMainInfo = ({title, area, rating, adults, children, infant, date, days, price, departFrom}) => {
    return <div className="hotel-card__main__info">
        <div className="hotel-card__main__info__title">{title}</div>
        <div className="hotel-card__main__info__area-name">{area}</div>
        <div className="hotel-card__main__info__rating">
            <Rating rating={rating}/>
        </div>
        <p><strong>{adults}</strong> adults, <strong>{children}</strong> children
            & <strong>{infant}</strong> infant</p>
        <p><strong>{date}</strong> for <strong>{days} days</strong></p>
        <p>departing from <strong>{departFrom}</strong></p>
        <button className="hotel-card__main__info__book-button">
            Book now
            <div className="hotel-card__main__info__book-button__price">${price}</div>
        </button>
    </div>;
};

export default HotelCardMainInfo;


