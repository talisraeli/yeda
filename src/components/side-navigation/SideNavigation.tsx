import style from './SideNavigation.module.sass';
import NavigationHeader from './NavigationHeader';
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
          <NavigationItem name="מושג לדוגמה" path="/מושג-לדוגמה" />
        </ul>
      </nav>
    </aside>
  );
}
