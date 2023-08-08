import style from './Footer.module.sass';

/**
 * The footer of the page.
 */
export default function Footer() {
  return (
    <div class={style.footer}>
      <div className="wrapper">
        <p>
          &copy; 2023 &quot;ידע – תבנית ליצירת מילון מושגים&quot;. כל הזכויות
          שמורות.
        </p>
        <p>השימוש בתבנית אתר זו פתוח לציבור הרחב בחינם לשימוש חופשי.</p>
      </div>
    </div>
  );
}
