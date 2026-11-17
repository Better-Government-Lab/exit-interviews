import { Button, Grid, GridContainer, Link } from "@trussworks/react-uswds";

export function Contact() {
  return (
    <section
      className="usa-section usa-section--accent"
      aria-label="Contact information"
      role="region"
    >
      <GridContainer>
        <Grid row>
          <Grid className="text-center">
            <h2>Stay in touch!</h2>

            <p>Sign-up for our newsletter to learn about future academic papers from BGL and the release of interview transcripts.</p>

            <Link href="/posts" className="usa-link">
              <Button type="button" accentStyle="cool">Browse all blog posts</Button>
            </Link>
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  )
}