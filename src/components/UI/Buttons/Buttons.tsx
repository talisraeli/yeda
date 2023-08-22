import { JSX } from 'preact';
import styles from './Buttons.module.sass';

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: JSX.Element | string;
  icon?: string;
  iconAlt?: string;
}

/**
 * Button components for the UI
 */

export function PrimaryButton(props: ButtonProps) {
  if (!props.icon) {
    return <button className={styles.primaryButton}>{props.children}</button>;
  }
  return (
    <button className={styles.primaryButton}>
      <div class="container">
        {props.children}
        <svg
          class="buttonIcon"
          src={`../../../../public/assets/${props.icon}`}
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
