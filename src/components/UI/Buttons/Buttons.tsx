import { JSX } from 'preact';
import styles from './Buttons.module.sass';

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: JSX.Element | string;
  icon?: string; // Can't put here JSX.Element due to clash with JSX.HTMLAttributes
  isReversed?: boolean;
  iconAlt?: string;
}

/**
 * Button components for the UI
 */

export function PrimaryButton(props: ButtonProps) {
  if (!props.icon) {
    return <button className={styles.primaryButton}>{props.children}</button>;
  }
  let containerClass = styles.container;
  if (props.isReversed) {
    containerClass = styles.container + ' ' + styles.reversed;
  }
  return (
    <button className={styles.primaryButton}>
      <div class={containerClass}>
        <div>{props.children}</div>
        <img
          class="buttonIcon"
          src={props.icon}
          alt={props.iconAlt ?? 'icon'}
        />
      </div>
    </button>
  );
}

export function SecondaryButton(props: ButtonProps) {
  if (!props.icon) {
    return <button className={styles.secondaryButton}>{props.children}</button>;
  }
  return (
    <button className={styles.primaryButton}>
      <div class="container">
        {props.children}
        <svg
          src={`~public/assets/${props.icon}`}
          alt={props.iconAlt ?? 'icon'}
        />
      </div>
    </button>
  );
}
