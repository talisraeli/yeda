import './style/global.sass';

import { SideNavigationContext } from './store/SideNavigationContext';
import Router from 'preact-router';

import Header from './components/header/Header';
import Content from './components/content/Content';

import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import Term from './pages/term/Term';

export default function App() {
  return (
    <SideNavigationContext.Provider value={{ isSideNavigationOpen: true }}>
      <Header />
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
