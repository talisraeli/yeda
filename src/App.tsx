import './style/global.sass';

import { SideNavigationContext } from './store/SideNavigationContext';
import Router from 'preact-router';

import Header from './components/header/Header';
import Content from './components/content/Content';

import Home from './pages/home/Home';
import NotFound from './pages/404/404.tsx';
import Term from './pages/term/Term';
import { useEffect, useState } from 'preact/hooks';

export default function App() {
  const [sideNavOpen, setSideNavOpen] = useState(true);

  const openSideNav = () => {
    if(!sideNavOpen){
      setSideNavOpen(true);
    }
  };

  const closeSideNav = () => {
    if(sideNavOpen){
      setSideNavOpen(false);
    }
  };

  const toggleSideNav = () => {
    setSideNavOpen(prev => !prev);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      // We don't want to show the side navigation on mobile on default!
      setSideNavOpen(false);
    }
  }, []);
  return (
    <SideNavigationContext.Provider
      value={{ isSideNavigationOpen: sideNavOpen }}
    >
      <Header toggleSideNav={toggleSideNav} />
      <Content>
        <Router>
          <Home path="/" />
          <NotFound path="/404" closeNav={closeSideNav} />
          <Term path="/:name+" />
        </Router>
      </Content>
    </SideNavigationContext.Provider>
  );
}
