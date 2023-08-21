import './style/global.sass';

// preact imports
import Router from 'preact-router';

// components
import Header from '~components/header/Header';
import Content from '~components/content/Content';

// hooks
import useSideNavigation from '~hooks/useSideNavigation';
import useTheme from '~hooks/useTheme';

// pages
import Home from '~pages/home/Home';
import NotFound from '~pages/NotFound/NotFound.tsx';
import Term from '~pages/term/Term';
import Providers from '~store/Providers';

export default function App() {
  const { isSideNavigationOpen, toggleSideNavigation } = useSideNavigation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Providers isSideNavigationOpen={isSideNavigationOpen} theme={theme}>
      <Header toggleSideNav={toggleSideNavigation} toggleTheme={toggleTheme} />
      <Content>
        <Router>
          <Home path="/" />
          <NotFound path="/404" />
          <Term path="/:name+" />
        </Router>
      </Content>
    </Providers>
  );
}
