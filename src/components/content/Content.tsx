import style from './Content.module.sass';

import { JSX } from 'preact/jsx-runtime';
import SideNavigation from '../side-navigation/SideNavigation';
import Footer from '../footer/Footer';

type ContentProps = {
  children: JSX.Element;
};

/**
 * The main content of the page.
 * @param props The props of the component.
 */
export default function Content(props: ContentProps) {
  return (
    <div class={style.content}>
      <SideNavigation />
      <div class={style.mainContent}>
        <main>
          <div className="wrapper">{props.children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
