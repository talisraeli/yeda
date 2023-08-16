import './style/global.sass';

// preact imports
import Router from 'preact-router';

import { SideNavigationContext } from './store/SideNavigationContext';

// components
import Header from './components/header/Header';
import Content from './components/content/Content';

// hooks
import useSideNavigation from './hooks/useSideNavigation.ts';

// pages
import Home from './pages/home/Home';
import NotFound from './pages/NotFound/NotFound.tsx';
import Term from './pages/term/Term';

export default function App() {
  const { sideNavOpen, toggleSideNav } = useSideNavigation();
  return (
    <SideNavigationContext.Provider
      value={{ isSideNavigationOpen: sideNavOpen }}
    >
      <Header toggleSideNav={toggleSideNav} />
      <Content>
        <Router>
          <Home path="/" />
          <NotFound path="/404" />
          <Term path="/:name+" />
        </Router>
      </Content>
    </SideNavigationContext.Provider>
  );
}
