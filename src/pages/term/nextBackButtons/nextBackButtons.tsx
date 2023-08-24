import styles from './nextBackButtons.module.sass';
import { PrimaryButton } from '~components/UI/Buttons/Buttons';

// icons
import backArrow from  '../icons/backArrow.svg';
import nextArrow from '../icons/nextArrow.svg';

interface nextBackButtonsProps {
  visitNextItem: () => void;
  visitPreviousItem: () => void;
}

/**
 * Buttons for moving to the next and previous terms in the side navigation
 */
export default function NextBackButtons(props: nextBackButtonsProps) {
  return (
    <div class={styles.buttonGroup}>
      <PrimaryButton
        onClick={props.visitPreviousItem}
        icon={backArrow}
        isReversed={true}
      >
        למושג הקודם
      </PrimaryButton>
      <PrimaryButton onClick={props.visitNextItem} icon={nextArrow}>
        למושג הבא
      </PrimaryButton>
    </div>
  );
}
