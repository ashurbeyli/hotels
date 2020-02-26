import React from "react";

import sortByListData from "../mockData/sortByListData";

const withSortByListData = WrappedComponent => <WrappedComponent items={sortByListData} />;

export default withSortByListData;