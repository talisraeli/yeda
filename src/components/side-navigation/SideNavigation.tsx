import style from './SideNavigation.module.sass';
import NavigationHeader from './navigation-item/NavigationHeader';
import NavigationItem from './NavigationItem';

/**
 * The side navigation bar of the website.
 */
export default function SideNavigation() {
  return (
    <aside class={style.sideNavigation}>
      <nav>
        <ul class={style.group}>
          <NavigationHeader name="תפריט" />
          <NavigationItem name="מושג 1" />
          <NavigationItem name="מושג 2" active />
          <NavigationItem name="מושג 3" />
          <NavigationItem name="מושג 4" />
          <NavigationItem name="מושג 5" />
        </ul>
      </nav>
    </aside>
  );
}
