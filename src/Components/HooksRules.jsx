import React from "react";

const HooksRules = () => {
  const [lorem, ] = React.useState('lorem ipsum')
  return (
    <div>
      <h1>
       {lorem}
      </h1>
    </div>
  );
};

export default HooksRules;
