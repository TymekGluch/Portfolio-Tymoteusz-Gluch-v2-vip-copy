import {
    navigationLinks,
    onlyMobileLinks,
  } from "../MainNavigation/MainNavigation.data";

  const namesOfOnlyMobileLink = onlyMobileLinks.map(({ name }) => name);

  const resolvedSideNavigationLink = navigationLinks.filter((current) => !namesOfOnlyMobileLink.includes(current.name) && current.name !== 'Technologies, I work');

  export { resolvedSideNavigationLink };
