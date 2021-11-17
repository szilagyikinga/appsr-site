import React from "react";
import { graphql } from "gatsby";

import Article from "../../components/article";

const FocusTemplate = ({ data }) => {
  const {
    title,
    image,
    childContentfulFocusDescriptionTextNode: {
      childMarkdownRemark: { html },
    },
  } = data.contentfulFocus;
  return <Article title={title} image={image} html={html} />;
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
