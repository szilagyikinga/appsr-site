import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const FocusSection = () => {
  const { guideImagePath } = useStaticQuery(
    graphql`
      query {
        guideImagePath: file(relativePath: { eq: "illustration-3.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const focusImage = getImage(guideImagePath);
  return (
    <section className="py-8 py-md-11">
      <div class="container">
        <div class="row align-items-center text-center text-md-start">
          <div class="col-12 col-md-6">
            <GatsbyImage
              image={focusImage}
              className="img-fluid mw-md-130"
              alt=""
            />
          </div>
          <div class="col-12 col-md-6">
            <h1 class="display-1 fw-bold">
              <div data-aos="fade-left">Focus</div>
            </h1>
            <p class="fs-lg text-muted mb-0">
              Comment obtenir une assurance de prêt en cas de maladie ? La
              question nous est souvent posée car le parcours de santé peut
              parfois refroidir certains assureurs. Quelques rappels sur la
              convention AERAS et sur les solutions alternatives qui s'offrent à
              vous.
            </p>
            <div class="text-center pt-8">
              <Link to="focus" class="btn btn-primary-desat lift">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
