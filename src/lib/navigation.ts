export type NavItem = {
  text: string;
  url: string;
  className: string;
};

export const makeNavItem = (text: string, url: string, className: string = 'usa-nav__link'): NavItem => ({
  text,
  url,
  className: `${className}`,
});

export const primaryItems = [
  makeNavItem("Example", "/example"),
];

export const secondaryItems = [
  makeNavItem("Secondary example", "https://example.com", "usa-button usa-button--outline margin-left-105 margin-bottom-2"),
];
