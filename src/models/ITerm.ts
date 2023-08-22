/**
 * The model defenition for a term object.
 */
interface ITerm {
  urlPath: string;
  displayName: string;
  description: string;
  customMarkdownPath?: string;
}

export default ITerm;
