import { GridContainer } from "@trussworks/react-uswds";
import { BuilderLink } from "../_components/builder-link";

export default async function Accessibility() {
  return (
    <main>
      <GridContainer>
        <section className="usa-prose">
          <h1 className="padding-top-3">Accessibility statement</h1>

          <p className="margin-top-4 text-italic">
            Last updated: February 27, 2025
          </p>
          <p>
            <BuilderLink href="/">We the Builders</BuilderLink> is committed to creating an accessible website for all visitors, including people who have difficulty seeing, hearing, operating computer hardware, or who experience cognitive or learning challenges. Accessibility is an ongoing effort, and we seek to improve our site by providing regular training for the people who write our content and build our website.
          </p>

          <p>
            Our website is new, and it's a work in progress. We are prioritizing accessibility in our near-term goals.
          </p>

          <h2>How we support and maintain accessibility</h2>
          <h3>We ensure the accessibility of wethebuilders.org by:</h3>
          <ul className="usa-list margin-left-4">
            <li>
              Manually testing content for keyboard and screen reader
              accessibility
            </li>
            <li>Using semantic section headings to organize the content</li>
            <li>
              Allowing people to use the keyboard to access all links and
              interactive parts of our website
            </li>
            <li>Providing detailed alt text for images, icons, and logos</li>
            <li>Allowing users to resize text according to preference</li>
          </ul>

          <h3>
            We plan to to further ensure accessibility in the near future by:
          </h3>
          <ul className="usa-list margin-left-4">
            <li>
              Translating our content into other languages with the help of real people
            </li>
            <li>
              Adding code to external links to announce “opening in new window”
              for screen readers
            </li>
            <li>Including “skip to main content” functionality</li>
          </ul>

          <h2>Accessibility help, feedback, and formal complaints</h2>

          <p className="margin-bottom-6">
            Email us at{" "}
            <a href="mailto:accessibility@wethebuilders.org">
              accessibility@wethebuilders.org
            </a>{" "}
            with any feedback on your experience with We the Builders.
          </p>
        </section>
      </GridContainer>
    </main>
  );
}
