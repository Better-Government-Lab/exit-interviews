"use client";

import { useState } from "react";
import {
  Header,
  NavMenuButton,
  ExtendedNav,
  Title,
} from "@trussworks/react-uswds";
import { BuilderLink } from "./builder-link";

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
  makeNavItem("Wins", "#wins"),
  makeNavItem("Hard Things", "#hardThings"),
  makeNavItem("The end of an era", "#end"),
  makeNavItem("The future", "#future"),
  makeNavItem("Examples", "#examples")
];

export const secondaryItems = [
  makeNavItem("Secondary example", "https://example.com", "usa-button usa-button--outline margin-left-105 margin-bottom-2"),
];

export function BuilderHeader() {
  const [expanded, setExpanded] = useState(false);

  const onClick = () => {
    setExpanded((prev) => !prev);
  };

  const createBuilderLink = (item: NavItem) => {
    return (
      <BuilderLink key={item.url} href={item.url} className={item.className}>
        {item.text}
      </BuilderLink>
    )
  }

  const primaryNavItems = primaryItems.map(createBuilderLink)
  const secondaryNavItems = secondaryItems.map(createBuilderLink);

  return (
    <>
      <Header extended={true}>
          <div className="usa-navbar">
            <Title>
              Exit Interviews
            </Title>
            <NavMenuButton
              aria-expanded={expanded}
              onClick={onClick}
              label="Menu"
            />
          </div>
        <ExtendedNav
            primaryItems={primaryNavItems}
            secondaryItems={secondaryNavItems}
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
            aria-label="Primary navigation"
          />
      </Header>
    </>
  );
}
