import { JSX } from 'preact';
import styles from './Buttons.module.sass';

interface ButtonProps {
  onClick: () => void;
  children: JSX.Element | string;
}

/**
 * Button components for the UI
 */

export function PrimaryButton(props: ButtonProps) {
  return <button className={style.primaryButton}>{props.children}</button>;
}

export function SecondaryButton(props: ButtonProps) {
  return (
    <button className={style.secondaryButton}>{props.children}</button>
  );
}
