import ITerm from '~/models/ITerm';

/**
 * An array of all the available terms.
 */
export const termsData: ITerm[] = [
  {
    urlPath: 'getStarted',
    displayName: 'צעדים ראשונים',
    description: 'התחל להשתמש ב״ידע״',
    customMarkdownPath: 'getStarted',
  },
  {
    urlPath: 'projectStructure',
    displayName: 'מבנה הפרויקט ',
    description: 'הכר את מבנה הפרויקט',
    customMarkdownPath: 'projectStructure',
  },
  {
    urlPath: 'addTerms',
    displayName: 'הוסף מונחים',
    description: 'הוסף מונחים',
    customMarkdownPath: 'addTerms',
  },
  {
    urlPath: 'customDesign',
    displayName: 'עיצוב האתר',
    description: 'עיצוב האתר',
    customMarkdownPath: 'customDesign',
  },
  {
    urlPath: 'uiSystem',
    displayName: 'רכיבים ויזואלים',
    description: 'רכיבים ויזואלים',
    customMarkdownPath: 'uiSystem',
  },
  {
    urlPath: 'contribute',
    displayName: 'תרמו קוד לפרויקט',
    description: 'תרמו קוד לפרויקט',
    customMarkdownPath: 'contribute',
  },
];
