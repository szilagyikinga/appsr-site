import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const FocusTemplate = ({ data }) => {
  const {
    title,
    image,
    childContentfulFocusDescriptionTextNode: {
      childMarkdownRemark: { html },
    },
  } = data.contentfulFocus;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">{title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8 ">
              <figure className="figure mb-7">
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className="figure-img img-fluid rounded lift lift-lg"
                />
              </figure>
              <div
                className="blog"
                dangerouslySetInnerHTML={{
                  __html: html,
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getSingleFocus($title: String) {
    contentfulFocus(title: { eq: $title }) {
      childContentfulFocusDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default FocusTemplate;
