import React from "react";

const withSortBy = sortBy => WrappedComponent => (props) => <WrappedComponent {...props} sortBy={sortBy}/>;

withSortBy.DisplayName = 'withSortBy';

export default withSortBy;