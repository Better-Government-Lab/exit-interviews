import { getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";

import { Grid, GridContainer } from "@trussworks/react-uswds";

export default async function Index() {
  const pageContent = getPostBySlug(`exit-interviews`);
  const formattedContent = await markdownToHtml(pageContent.content || "");
  const heading = `Federal Civic Tech`;
  const subhed = `Exit Interviews`;
  const headingYear = `2025`;

  return (
    <main>
      <section aria-label="introduction">
        <GridContainer>
          <Grid row className="usa-hero__callout">
            <Grid col={12} tablet={{ col: 9 }}>
              <Grid col className="usa-hero__content border-right border-bottom text-bold">{heading}</Grid>
              <Grid col className="usa-hero__content border-right">{subhed}</Grid>
            </Grid>
            <Grid col className="usa-hero__content text-bold flex-align-self-center">{headingYear}</Grid>
          </Grid>
        </GridContainer>
      </section>

      <section aria-label="Markdown content">
        <GridContainer>
          <Grid row>
            <Grid className="usa-prose" dangerouslySetInnerHTML={{ __html: formattedContent.value }} />
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
