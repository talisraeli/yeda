import { Link, route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import styles from "./404.module.sass";

//TODO: add an arrow in the primary button

interface Props {
  closeNav: Function;
}
const NotFound = (props: Props) => {
  useEffect(() => {
    props.closeNav();
  }, []);
  const returnHome = () => {
    route('/');
  };
  return (
    <div class={styles.container}>
      <main>
        <h1 class="super-header">אופס!</h1>
        <h2 class="">נראה שהגעתם לכתובת שלא קיימת!</h2>
        <button class="button primary-button" onClick={returnHome}>
          חזרה לעמוד הבית
        </button>
      </main>
    </div>
  );
};

export default NotFound;
