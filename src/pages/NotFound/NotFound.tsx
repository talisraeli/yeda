import { route } from 'preact-router';
import { PrimaryButton } from '../../components/UI/Buttons/Buttons';

//TODO: add an arrow in the primary button (according to the figma)

/**
 * A 404 not found page, in case a user enters an invalid url
 */
export default function NotFound() {
  const returnHome = () => {
    route('/', true);
  };

  return (
    <div>
      <main>
        <h1 class="super-header">אופס!</h1>
        <h2 class="">נראה שהגעתם לכתובת שלא קיימת!</h2>
        <PrimaryButton onClick={returnHome}>חזרה לעמוד הבית</PrimaryButton>
      </main>
    </div>
  );
}
