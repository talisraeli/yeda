import style from './SideNavigation.module.sass';
import NavigationHeader from './NavigationHeader';
import NavigationItem from './NavigationItem';
import { SideNavigationContext } from '../../store/SideNavigationContext';
import { useContext } from 'preact/hooks';
/**
 * The side navigation bar of the website.
 */
export default function SideNavigation() {
  const sideNavContext = useContext(SideNavigationContext);
  const isOpen = sideNavContext.isSideNavigationOpen;
  if(!isOpen){
    return null;
  }
  return (
    <aside class={style.sideNavigation}>
      <nav>
        <ul class={style.group}>
          <NavigationHeader name="תפריט" />
          <NavigationItem name="מושג לדוגמה" path="/מושג-לדוגמה" />
        </ul>
      </nav>
    </aside>
  );
}
