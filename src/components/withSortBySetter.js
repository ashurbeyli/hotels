import React from "react";

const withSortBySetter = setSortBy => WrappedComponent => (props) => <WrappedComponent {...props} setSortBy={setSortBy}/>;

withSortBySetter.DisplayName = 'withSortBySetter';

export default withSortBySetter;