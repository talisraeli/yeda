import { useEffect, useState } from 'preact/hooks';
import { termsData } from './termsData';
import { route } from 'preact-router';
import ITerm from '~/models/ITerm';
import Markdown from 'preact-markdown';
import useChangeDescription from '../../hooks/useChangeDescription';
import useChangeTitle from '../../hooks/useChangeTitle';

type TermProps = {
  name?: string;
};

/**
 * The term page template of the website.
 */
export default function Term(props: TermProps) {
  const [term, setTerm] = useState<ITerm>();
  useChangeTitle(term?.displayName);
  useChangeDescription(term?.description);

  const [markdown, setMarkdown] = useState<string>();

  useEffect(() => {
    if (props.name === undefined) {
      route('/404', true);
      return;
    }

    const term = termsData.find(t => t.name === props.name);

    if (term === undefined) {
      route('/404', true);
      return;
    }

    setTerm(term);

    fetch(`/terms/${term.markdownPath}.markdown`)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      // eslint-disable-next-line no-console
      .catch(error => console.error(error));
  }, [props.name]);

  return markdown ? Markdown(markdown) : null;
}
