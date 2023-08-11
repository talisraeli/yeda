import { JSX } from 'preact/jsx-runtime';

import Header from './header/Header';
import Content from './content/Content';

interface Props {
  children: JSX.Element;
}
const Template = (props: Props) => {
  return (
    <>
      <Header />
      <Content>{props.children}</Content>
    </>
  );
};
export default Template;
