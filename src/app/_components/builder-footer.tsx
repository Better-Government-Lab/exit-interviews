import {
  Address,
  Button,
  Footer,
  Grid,
  Logo,
  SocialLink,
  SocialLinks,
} from "@trussworks/react-uswds";
import { BuilderLink } from "./builder-link";

export function BuilderFooter() {
  const returnToTop = (
    <div className="grid-container usa-footer__return-to-top">
      <Button type="button" unstyled>
        Return to top
      </Button>
    </div>
  );

  const socialLinkItems = [
    <SocialLink
      key="instagram"
      name="Instagram"
      href=""
    />,
    <SocialLink
      key="rss"
      name="RSS"
      href="/rss.xml"
    />,
    <SocialLink 
      key="twitter" 
      name="Twitter" 
      href="" 
    />,
  ];

  const footerLinks = [
    {
      key: "example",
      href: "",
      text: "Example",
    }
  ];

  return (
    <Footer
      size="medium"
      primary={
        <div className="usa-footer__primary-container grid-container margin-top-4">
          <div className="grid-row grid-gap">
            {footerLinks.map((link) => (
              <div
                key={link.key}
                className="grid-col-12 tablet:grid-col-12 desktop:grid-col-3"
              >
                <a
                  className="usa-footer__primary-link padding-y-2 display-block text-center"
                  href={link.href}
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      }
      secondary={
        <Grid row gap>
          <Logo
            size="medium"
            image={
              <img
                className=""
                alt=""
                src="" // /assets/logos/...svg
                width="250"
              />
            }
          />
          <div className="usa-footer__contact-links mobile-lg:grid-col-6">
            <SocialLinks links={socialLinkItems} />
            <Address
              size="big"
              items={[
                <a key="email" href="mailto:media@wethebuilders.org">
                  media@wethebuilders.org
                </a>,
                <BuilderLink href="#">...</BuilderLink>
              ]}
            />
          </div>
        </Grid>
      }
    />
  );
}
