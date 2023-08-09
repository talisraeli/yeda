import { useEffect } from 'preact/hooks';

/**
 * Changes the page description.
 * @param description The description of the page.
 */
export default function useChangeDescription(description?: string) {
  const baseDescription =
    'תבנית אתר בה ניתן ליצור מאגרי ידע בנושאים שונים בקלות ובלי הרבה ידע מוקדם.';

  useEffect(() => {
    const meta = document.head.querySelector('meta[name="description"]');
    const ogmeta = document.head.querySelector(
      'meta[property="og:description"]'
    );
    const twittermeta = document.head.querySelector(
      'meta[property="twitter:description"]'
    );

    if (description) {
      meta?.setAttribute('content', description);
      ogmeta?.setAttribute('content', description);
      twittermeta?.setAttribute('content', description);
    } else {
      meta?.setAttribute('content', baseDescription);
      ogmeta?.setAttribute('content', baseDescription);
      twittermeta?.setAttribute('content', baseDescription);
    }

    return () => {
      meta?.setAttribute('content', baseDescription);
      ogmeta?.setAttribute('content', baseDescription);
      twittermeta?.setAttribute('content', baseDescription);
    };
  }, [description]);
}
