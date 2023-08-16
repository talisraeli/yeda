import { useState, useEffect } from 'preact/hooks';

export default function useSideNavigation() {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const openSideNav = () => {
    if (!sideNavOpen) {
      setSideNavOpen(true);
    }
  };

  const closeSideNav = () => {
    if (sideNavOpen) {
      setSideNavOpen(false);
    }
  };

  const toggleSideNav = () => {
    setSideNavOpen(prev => !prev);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      // We don't want to show the side navigation on mobile on default!
      setSideNavOpen(false);
    }
  }, []);

  return {
    sideNavOpen: sideNavOpen,
    openSideNav: openSideNav,
    closeSideNav: closeSideNav,
    toggleSideNav: toggleSideNav,
  };
}
