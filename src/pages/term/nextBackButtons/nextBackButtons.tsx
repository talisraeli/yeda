import { NextButton, BackButton } from '~components/UI/Buttons/Buttons';
import styles from "./nextBackButtons.module.sass";

interface NextBackButtonsProps {
  visitNextItem: () => void;
  visitPreviousItem: () => void;
}

export default function NextBackButtons(props: NextBackButtonsProps) {
  return (
    <div class={styles.buttonGroup}>
      <BackButton onClick={props.visitPreviousItem}>למושג הקודם</BackButton>
      <NextButton onClick={props.visitNextItem}>למושג הבא</NextButton>
    </div>
  );
}
