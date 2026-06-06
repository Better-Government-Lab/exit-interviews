import { getPostBySlug } from "@/lib/posts";
import markdownToHtml from "@/lib/markdownToHtml";

import { Grid, GridContainer } from "@trussworks/react-uswds";

import mdStyles from '@/app/styles/markdown.module.css';

export default async function Index() {
  const pageContent = getPostBySlug(`one-year-since`);
  const formattedContent = await markdownToHtml(pageContent.content || "");
  const heading = `Civic tech exit interivews`;
  const headingAlt = `...`;

  return (
    <main>
      <section aria-label="introduction">
        <GridContainer>
          <Grid>
            <div className="usa-hero__callout usa-hero__callout--inverse">
              <h1 className="usa-hero__heading">{heading}</h1>
              <div className="usa-hero__heading--alt">{headingAlt}</div>
            </div>
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
