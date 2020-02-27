import React from "react";

import HotelCard from "../HotelCard/HotelCard";
import {compareByKey} from "../../common/utils/sortUtils";

const HotelsList = ({ items, sortBy }) =>
    items.sort(compareByKey(sortBy)).map(i => <HotelCard {...i} key={i.id} />);

export default HotelsList;