import React from 'react';
import TopTabs from './TopTabs';
import TopBanner from './TopBanner';
import Articles from './Articles';
import SMTabs from './SMTabs';
import Copyright from './Copyright';
import theme from '../styles/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline  from '@material-ui/core/CssBaseline';

const articles_test = [
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
  {
    heading: "Lorem ipsum",
    description: "Lorem impsum dolor sit amet allalala alda sd asda ...",
    date: new Date().toLocaleDateString()
  },
]

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <TopTabs labels={['WORKS', 'ABOUT']} />
        {/* Content */}
        <TopBanner />
        <Articles items={articles_test}></Articles>
        <SMTabs />
        <Copyright />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
