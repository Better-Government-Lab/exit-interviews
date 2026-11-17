const pagesBasePath = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

import Image from 'next/image';

import { Grid, GridContainer } from "@trussworks/react-uswds";

export function BuilderFooter() {

  return (
    <section className="usa-section usa-section--dark">
      <GridContainer>
        <Grid className="usa-prose">
          <Grid>
            <p>A project organized and funded by:</p>
          </Grid>
          <Grid row>
            <Grid offset="2">
              <Image src={`${pagesBasePath}/assets/img/bgl.png`} alt="Better Government Lab logo" width={250} height={125} />
            </Grid>
            <Grid offset="2">
              <Image src={`${pagesBasePath}/assets/img/beeck.png`} alt="Beeck Center for Social Impact and Innovation logo" width={250} height={125} />
            </Grid>
          </Grid>
          <Grid>
            <ul className="usa-list usa-list--unstyled">
              <li>Julie Sutherland (Research, Content, Web  Design)</li>
              <li>Rachael Zuppke (Research, Content, Project Management)</li>
              <li>Kate Green (Web Development)</li>
              <li>Emma Northcott (Research)</li>
              <li>Emma X (Research, Project coordination)</li>
            </ul>
          </Grid>
          <Grid>
            Special thanks to our current and former colleagues and civic tech friends who advised us on the questions and goals of this project.
          </Grid>
        </Grid>
      </GridContainer>
    </section>
  );
}
