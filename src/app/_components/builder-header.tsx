"use client";

import { useState } from "react";
import {
  Header,
  NavMenuButton,
  ExtendedNav,
  Title,
} from "@trussworks/react-uswds";
import { primaryItems, secondaryItems, NavItem } from "@/lib/navigation";
import { BuilderLink } from "./builder-link";

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
              {/* <BuilderLink href="#">
                <img
                  className=""
                  alt=""
                  src="#" // /assets/logos"
                />
              </BuilderLink> */}
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
