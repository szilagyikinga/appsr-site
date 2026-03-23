import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import BgImage from "../../bg-image";
import Curve from "../../curve";

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
  return (
    <>
      <section
        style={{ marginTop: -87 }}
        className="overlay overlay-black overlay-60"
      >
        <BgImage
          image={image}
          Tag="div"
          className="pt-11 pt-md-14 pb-11 pb-md-14"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-7 text-center">
                <h1 className="display-2 fw-bold text-white">{title}</h1>
              </div>
            </div>
          </div>
        </BgImage>
      </section>
      <Curve className="text-white" />
    </>
  );
};

export default GuideList;
