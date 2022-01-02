import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Curve1 from "../../../images/curve-1.inline.svg";

const GuideList = ({ title }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cover-3.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);
  return (
    <>
      <section
        style={{ marginTop: -87 }}
        className="overlay overlay-black overlay-60"
      >
        <BackgroundImage
          Tag="div"
          className="pt-12 pt-md-14 pb-12 pb-md-15"
          {...bgImage}
          preserveStackingContext
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-7 text-center">
                <h1 className="display-2 fw-bold text-white">{title}</h1>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </section>
      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x text-light">
          <Curve1 />
        </div>
      </div>
    </>
  );
};

export default GuideList;
