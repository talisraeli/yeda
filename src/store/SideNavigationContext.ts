import { createContext } from 'preact';

interface ISideNavigationContext {
  isSideNavigationOpen: boolean;
}

/**
 * Stores information about the side navigation.
 */
export const SideNavigationContext = createContext<ISideNavigationContext>({
  isSideNavigationOpen: false,
});
