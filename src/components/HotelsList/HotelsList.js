import React from "react";

import HotelCard from "../HotelCard/HotelCard";

const HotelsList = ({ items }) => items.map(i => <HotelCard {...i} key={i.id} />);

export default HotelsList;