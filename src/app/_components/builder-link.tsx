"use client";

import NextLink from "next/link";
import { Link as USWDSLink } from "@trussworks/react-uswds";

/**
 * BuilderLink combines Next.js's Link component with USWDS's Link styling.
 *
 * Why this component exists:
 * 1. Next.js Link provides client-side navigation (prevents full page reloads)
 * 2. USWDS Link provides government design system styling
 * 3. This component bridges the gap between the two, giving us both
 *    performant navigation and consistent styling
 * 4. Handles both internal and external links:
 *    - Internal links use Next.js Link for client-side navigation.
 *    - External links (starting with http:// or https://) render a USWDS-styled anchor tag
 */

type BuilderLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

export const BuilderLink = ({
  href,
  className,
  children,
}: BuilderLinkProps) => {
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <USWDSLink href={href} className={className}>
        {children}
      </USWDSLink>
    );
  }

  return (
    <NextLink href={href} passHref>
      {/* <USWDSLink className={className} to="{href}"> */}
        {children}
      {/* </USWDSLink> */}
    </NextLink>
  );
};
