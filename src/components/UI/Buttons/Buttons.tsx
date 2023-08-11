import { JSX } from 'preact/jsx-runtime';

interface Props {
  onClick: () => any;
  children: JSX.Element;
}
export const PrimaryButton = (props: Props) => {
  return <button className="button primary-button">{props.children}</button>;
};

export const SecondaryButton = (props: Props) => {
  return (
    <button className="button secondary-button">
      {props.children}
    </button>
  );
};
