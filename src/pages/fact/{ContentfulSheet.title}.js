import React from "react";
import { graphql } from "gatsby";

import Article from "../../components/article";

const SheetTemplate = ({ data }) => {
  const {
    title,
    image,
    childContentfulSheetDescriptionTextNode: {
      childMarkdownRemark: { html },
    },
  } = data.contentfulSheet;

  return <Article title={title} image={image} html={html} />;
};

export const query = graphql`
  query getSingleSheet($title: String) {
    contentfulSheet(title: { eq: $title }) {
      childContentfulSheetDescriptionTextNode {
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

export default SheetTemplate;
