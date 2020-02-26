import React from "react";

import hotelsListData from "../mockData/hotelsListData";

const withHotelsListData = WrappedComponent => <WrappedComponent items={hotelsListData} />;

export default withHotelsListData;