import React from "react";

import sortByListData from "../mockData/sortByListData";

const withSortByListData = WrappedComponent => (props) => <WrappedComponent
    {...props}
    items={sortByListData}
/>;

withSortByListData.DisplayName = 'withSortByListData';

export default withSortByListData;