import React from 'react';
import {TopTabs} from './TopTabs';
import CssBaseline  from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <TopTabs labels={['HOME', 'WORKS', 'ABOUT']} />
    </React.Fragment>
  );
}

export default App;
