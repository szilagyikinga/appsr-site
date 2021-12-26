import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

const BlogHeroImage = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cover-13.jpg" }) {
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
    <section className="overlay overlay-black overlay-60">
      <BackgroundImage
        Tag="div"
        className="pt-8 pt-md-12 pb-10 pb-md-14 bg-cover"
        {...bgImage}
        preserveStackingContext
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h1 className="display-1 fw-bold text-white">Blog</h1>
              <p className="lead mb-0 text-white-75">
                Keep up to date with what we're working on! Landkit is an ever
                evolving theme with regular updates.
              </p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
};

export default BlogHeroImage;
