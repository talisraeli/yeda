import { useState, useEffect } from 'preact/hooks';

export default function useSideNavigation() {
  const [isSideNavigationOpen, setIsSideNavigationOpen] = useState(true);

  const toggleSideNavigation = () => {
    setIsSideNavigationOpen(prev => !prev);
  };

  const openSideNavigation = () => {
    if (!isSideNavigationOpen) {
      setIsSideNavigationOpen(true);
    }
  };

  const closeSideNavigation = () => {
    if (isSideNavigationOpen) {
      setIsSideNavigationOpen(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      // We don't want to show the side navigation on mobile on default!
      setIsSideNavigationOpen(false);
    }
  }, []);

  return {
    isSideNavigationOpen,
    toggleSideNavigation,
    openSideNavigation,
    closeSideNavigation,
  };
}
