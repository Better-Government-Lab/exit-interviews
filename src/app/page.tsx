import { getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";

import { Grid, GridContainer } from "@trussworks/react-uswds";

import mdStyles from '@/app/styles/markdown.module.css';

export default async function Index() {
  const pageContent = getPostBySlug(`one-year-since`);
  const formattedContent = await markdownToHtml(pageContent.content || "");
  const heading = `Federal Civic Tech`;
  const subhed = `Exit Interviews`;
  const headingYear = `2025`;

  return (
    <main>
      <section aria-label="introduction">
        <GridContainer>
          <Grid row className="usa-hero__callout">
            <Grid col={9}>
              <Grid col className="usa-hero__content">{heading}</Grid>
              <Grid col className="usa-hero__content">{subhed}</Grid>
            </Grid>
            <Grid col className="usa-hero__content text-bold text-middle">{headingYear}</Grid>
          </Grid>
        </GridContainer>
      </section>

      <section aria-label="Markdown content">
        <GridContainer>
          <Grid row>
            <Grid className={mdStyles['markdown']} dangerouslySetInnerHTML={{ __html: formattedContent }} />
          </Grid>
        </GridContainer>
      </section>

      <section
        className="usa-graphic-list usa-section usa-section--dark"
        aria-label="Contact information"
        role="region"
      >
        <GridContainer>
          <Grid row gap className="usa-graphic-list__row">
          </Grid>
        </GridContainer>
      </section>
    </main>
  );
}
