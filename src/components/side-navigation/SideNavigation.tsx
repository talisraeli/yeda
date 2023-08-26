import { useContext } from 'preact/hooks';
import style from './SideNavigation.module.sass';
import NavigationHeader from './NavigationHeader';
import NavigationItem from './NavigationItem';
import { SideNavigationContext } from '../../store/SideNavigationContext';
import { termsData } from '~pages/term/termsData';
/**
 * The side navigation bar of the website.
 */
export default function SideNavigation() {
  const sideNavContext = useContext(SideNavigationContext);
  const isOpen = sideNavContext.isSideNavigationOpen;
  if (!isOpen) {
    return null;
  }
  return (
    <aside class={style.sideNavigation}>
      <nav>
        <ul class={style.group}>
          <NavigationHeader name="תפריט" />
          {termsData.map(termData => (
            <NavigationItem
              name={termData.displayName}
              path={`/${termData.urlPath}`}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
