import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Curve1 from "../../../assets/images/curve-1.inline.svg";

const GuideContent = () => {
  const { image1, image2, image3, image4 } = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "portfolio-17.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image2: file(relativePath: { eq: "portfolio-18.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image3: file(relativePath: { eq: "portfolio-19.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image4: file(relativePath: { eq: "portfolio-20.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const pathToImage1 = getImage(image1);
  const pathToImage2 = getImage(image2);
  const pathToImage3 = getImage(image3);
  const pathToImage4 = getImage(image4);

  const guideTypes = [
    { image: pathToImage1, link: "guide1" },
    { image: pathToImage2, link: "guide2", style: "large" },
    { image: pathToImage3, link: "guide3", style: "large" },
    { image: pathToImage4, link: "guide4" },
  ];
  return (
    <div className="container">
      <div
        className="row"
        id="portfolio"
        // dataIsotope={{ layoutMode: "fitRows" }}
      >
        {guideTypes.map((guideType, index) => {
          const divClassName =
            guideType.style && guideType.style === "large"
              ? "col-12 col-md-7 product"
              : "col-12 col-md-5 product";
          return (
            <div key={index} className={divClassName}>
              <Link
                to={guideType.link}
                className="card lift lift-lg shadow-light-lg mb-7"
              >
                <GatsbyImage
                  image={guideType.image}
                  alt="image-1" // @todo: update alt
                  className="card-img-top"
                />

                <div className="card-body">
                  <div className="shape shape-bottom-100 shape-fluid-x text-white">
                    <Curve1 />
                  </div>

                  <h6 className="text-uppercase mb-1 text-muted">
                    Branding Exploration
                  </h6>

                  <h4 className="mb-0">Curology "Any Face" Campaign</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuideContent;
