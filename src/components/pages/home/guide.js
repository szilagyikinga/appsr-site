import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const GuideSection = () => {
  const { guides } = useStaticQuery(
    graphql`
      query {
        guides: file(relativePath: { eq: "illustration-3.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const guidesImage = getImage(guides);
  return (
    <section className="py-8 py-md-12">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <span className="badge rounded-pill bg-primary-soft mb-3">
              <span className="h6 text-uppercase">Pricing</span>
            </span>
            <h2>
              Don't worry about pricing. <br />
              <span className="text-primary">We maximize your earnings</span>.
            </h2>

            <p className="fs-lg text-gray-700 mb-6">
              Instead of constantly worrying about when your home will be in
              demand, just share your availability and we will price based on
              popularity of your listing, seasonal factors, nearby events, and
              more.
            </p>

            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="d-flex">
                  <div className="badge badge-rounded-circle bg-primary-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>35% more earned</p>
                </div>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle bg-primary-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p className="mb-lg-0">No wasted time</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d-flex">
                  <span className="badge badge-rounded-circle bg-primary-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </span>

                  <p>60% less vacancy</p>
                </div>

                <div className="d-flex">
                  <div className="badge badge-rounded-circle bg-primary-soft me-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p className="mb-0">Data driven</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <GatsbyImage
              image={guidesImage}
              className="img-fluid mw-md-130"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
