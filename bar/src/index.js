import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'common';

ReactDOM.render(
  (<div>
    Bar React version is {React.version}
    <Button title="Bar!" />
  </div>),
  document.getElementById('react-app'),
);
