import style from './SideNavigation.module.sass';

type NavigationItemProps = {
  name: string;
  active?: boolean;
};

/**
 * A navigation item on the side navigation.
 * @param props The props of the component.
 */
export default function NavigationItem(props: NavigationItemProps) {
  return (
    <li class={props.active ? style.active : ''}>
      <a class="wrapper" href="#">
        {props.name}
      </a>
    </li>
  );
}
