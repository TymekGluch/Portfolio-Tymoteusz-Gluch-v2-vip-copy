import React from "react";

const LazyButton = React.lazy(() => import("./Button"));

export default LazyButton;