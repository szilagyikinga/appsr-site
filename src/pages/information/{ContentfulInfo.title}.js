import React from "react";
import { graphql } from "gatsby";

import Article from "../../components/article";

const InfoTemplate = ({ data }) => {
  const {
    title,
    image,
    childContentfulInfoDescriptionTextNode: {
      childMarkdownRemark: { html },
    },
  } = data.contentfulInfo;

  return <Article title={title} image={image} html={html} />;
};

export const query = graphql`
  query getSingleInfo($title: String) {
    contentfulInfo(title: { eq: $title }) {
      childContentfulInfoDescriptionTextNode {
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

export default InfoTemplate;
