// preact imports
import { useEffect, useState, useMemo } from 'preact/hooks';
import { route } from 'preact-router';
import Markdown from 'preact-markdown';
// yeda imports
import { termsData } from './termsData';
import ITerm from '~/models/ITerm';
import useChangeDescription from '../../hooks/useChangeDescription';
import useChangeTitle from '../../hooks/useChangeTitle';
import styles from './Term.module.sass';

import NextBackButtons from './nextBackButtons/nextBackButtons';

type TermProps = {
  name?: string;
};

/**
 * The term page template of the website.
 */
export default function Term(props: TermProps) {
  //TODO: implement these dummy methods once the representation of terms is final.
  const visitNextItem = () => {};

  const visitPreviousItem = () => {};

  const [term, setTerm] = useState<ITerm>();
  useChangeTitle(term?.displayName);
  useChangeDescription(term?.description);

  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    if (props.name === undefined) {
      route('/404', true);
      return;
    }
    const term = termsData.find(t => t.urlPath === props.name);

    if (term === undefined) {
      route('/404', true);
      return;
    }

    setTerm(term);
    const markdownPath = term.customMarkdownPath ?? term.urlPath;

    fetch(`/terms/${markdownPath}.md`)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  });
  const markdownContent = useMemo(() => {
    return markdown ? Markdown(markdown) : null;
  }, [markdown]);

  return (
    <>
      {markdownContent}
      <div class={styles.afterMarkdown}>
        <NextBackButtons
          onNextItemClick={visitNextItem}
          onPreviousItemClick={visitPreviousItem}
        />
      </div>
    </>
  );
}
