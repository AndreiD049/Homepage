import React from 'react';
import TopTabs from './TopTabs';
import TopBanner from './TopBanner';
import CssBaseline  from '@material-ui/core/CssBaseline';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <TopTabs labels={['WORKS', 'ABOUT']} />
      <TopBanner />
    </React.Fragment>
  );
}

export default App;
