import React from 'react';
import ReactDOM from 'react-dom';

import { Button } from 'common';

ReactDOM.render(
  (<div>
    Foo React version is {React.version}
    <Button />
  </div>),
  document.getElementById('react-app'),
);
