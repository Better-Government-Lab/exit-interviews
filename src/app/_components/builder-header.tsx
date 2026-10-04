"use client";

import { useState } from "react";
import {
  Header,
  NavMenuButton,
  ExtendedNav,
  Title,
  PrimaryNav,
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

// if you change these and they don't look right, go to
// globals.scss and adjust .usa-header--basic.usa-navbar width
export const items = [
  makeNavItem("Wins", "#wins"),
  makeNavItem("Barriers", "#barriers"),
  makeNavItem("The end of an era", "#end"),
  makeNavItem("Direct File", "#df"),
  makeNavItem("The project", "#project")
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

  const primaryNavItems = items.map(createBuilderLink)

  return (
    <>
      <Header basic={true}>
        <div className="usa-nav-container">
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
          <PrimaryNav
            mobileExpanded={expanded}
            onToggleMobileNav={onClick}
            items={primaryNavItems}
            aria-label="Primary navigation"
          />
        </div>
      </Header>
    </>
  );
}
