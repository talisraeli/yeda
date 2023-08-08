import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

/**
 * The 404 NOT FOUND error page.
 */
export default function NotFound() {
  useEffect(() => {
    // Returns to home page
    route('/', true);
  }, []);

  return null;
}
