import { useEffect, useState } from 'preact/hooks';
import { termsData } from './termsData';
import { route } from 'preact-router';
import ITerm from '~/models/ITerm';
import Markdown from 'preact-markdown';
import useChangeDescription from '../../hooks/useChangeDescription';
import useChangeTitle from '../../hooks/useChangeTitle';
import { Fragment } from 'preact/jsx-runtime';
import { PrimaryButton } from '~components/UI/Buttons/Buttons';
import styles from './Term.module.sass';

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

    fetch(`/terms/${term.customMarkdownPath}.md`)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, [props.name]);

  const markdownContent = markdown ? Markdown(markdown) : null;
  return (
    <Fragment>
      {markdownContent}
      <div class={styles.afterMarkdown}>
        <div class={styles.buttonList}>
          <PrimaryButton onClick={visitPreviousItem}>למושג הקודם</PrimaryButton>
          <PrimaryButton onClick={visitNextItem}>למושג הבא</PrimaryButton>
        </div>
      </div>
    </Fragment>
  );
}
