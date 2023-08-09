import { Link } from 'preact-router/match';
import style from './SideNavigation.module.sass';

type NavigationItemProps = {
  name: string;
  path: string;
};

/**
 * A navigation item on the side navigation.
 * @param props The props of the component.
 */
export default function NavigationItem(props: NavigationItemProps) {
  return (
    <li class={style.item}>
      <Link class="wrapper" activeClassName={style.active} href={props.path}>
        {props.name}
      </Link>
    </li>
  );
}
