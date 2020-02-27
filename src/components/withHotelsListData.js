import React from "react";

import hotelsListData from "../mockData/hotelsListData";

const withHotelsListData = WrappedComponent => (props) => <WrappedComponent {...props} items={hotelsListData} />;

withHotelsListData.DisplayName = 'withHotelsListData';

export default withHotelsListData;