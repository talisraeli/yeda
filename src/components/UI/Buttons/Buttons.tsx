import { JSX } from 'preact';
import styles from './Buttons.module.sass';

interface ButtonProps extends JSX.HTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  children: JSX.Element | string;
}

/**
 * Button components for the UI
 */

export function PrimaryButton(props: ButtonProps) {
  return <button className={styles.primaryButton}>{props.children}</button>;
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <button className={styles.secondaryButton}>{props.children}</button>
  );
}
