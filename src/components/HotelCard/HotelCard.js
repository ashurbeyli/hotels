import React  from "react";

import { IMAGE_PATH } from '../../common/constants/filePaths';

import './HotelCard.css';
import HotelCardDescription from "./HotelCardDescription/HotelCardDescription";
import HotelCardMainInfo from "./HotelCardMainInfo/HotelCardMainInfo";

const HotelCard = ({ image, description, ...restProps }) => {
    return <div className="hotel-card">
        <div className="hotel-card__main">
            <div className="hotel-card__main__image-section" style={{backgroundImage: `url(${IMAGE_PATH}${image})`}}/>
            <HotelCardMainInfo {...restProps} />
        </div>
        <HotelCardDescription description={description} />
    </div>;
};

export default HotelCard;