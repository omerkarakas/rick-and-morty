import React from 'react';
import * as sc from './Spinner.styles';

const Spinner = () => {
  return (
    <sc.SpinnerContainer>
      <div className="flipping-5"></div>
    </sc.SpinnerContainer>
  );
};

export default Spinner;
