import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './Root';

function renderApp() {
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById('react-root')
  );
}

renderApp();

/* global IS_DEV */

if (IS_DEV) {
  module.hot.accept('./Root', renderApp);
}
