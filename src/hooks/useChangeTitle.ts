import { useEffect } from 'preact/hooks';

/**
 * Changes the page title.
 * @param name The additional name part to the base title.
 */
export default function useChangeTitle(name?: string) {
  const baseTitle = 'ידע – תבנית ליצירת מילון מושגים';

  useEffect(() => {
    const meta = document.head.querySelector('meta[name="title"]');
    const ogmeta = document.head.querySelector('meta[property="og:title"]');
    const twittermeta = document.head.querySelector(
      'meta[property="twitter:title"]'
    );

    if (name) {
      const newTitle = `${name} – ${baseTitle}`;
      document.title = newTitle;
      meta?.setAttribute('content', newTitle);
      ogmeta?.setAttribute('content', newTitle);
      ogmeta?.setAttribute('content', newTitle);
    } else {
      document.title = baseTitle;
      meta?.setAttribute('content', baseTitle);
      ogmeta?.setAttribute('content', baseTitle);
      twittermeta?.setAttribute('content', baseTitle);
    }

    return () => {
      document.title = baseTitle;
      meta?.setAttribute('content', baseTitle);
      ogmeta?.setAttribute('content', baseTitle);
      twittermeta?.setAttribute('content', baseTitle);
    };
  }, [name]);
}
