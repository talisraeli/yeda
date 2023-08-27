import styles from './Overlay.module.sass';

interface OverlayProps {
  children: JSX.Element | JSX.Element[] | undefined;
  display: string | null;
  onClick: () => void | null;
}

/**
 * Overlay for modals and for hierarchy
 */
export default function Overlay(props: OverlayProps) {
  let displayMode = 'screen'; // as default, the overlay covers the entire screen
  if (props.display) {
    displayMode = props.display;
  }

  const onClickOverlayHandler = () => {
    props?.onClick();
  };

  const displayClass = styles[`display-${displayMode}`];
  return (
    <div
      class={`${styles.overlay} ${displayClass}`}
      onClick={onClickOverlayHandler}
    >
      {props.children}
    </div>
  );
}
