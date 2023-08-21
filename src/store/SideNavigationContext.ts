import { createContext } from 'preact';

export interface ISideNavigationContext {
  isSideNavigationOpen: boolean;
}

/**
 * Stores information about the side navigation.
 */
export const SideNavigationContext = createContext<ISideNavigationContext>({
  isSideNavigationOpen: false,
});
