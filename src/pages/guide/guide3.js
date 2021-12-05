import React from "react";
import { graphql } from "gatsby";

import GuideCategory from "../../components/pages/guide/guide-category";

const Guide = ({
  data: {
    allContentfulGuide: { nodes: guides },
  },
}) => <GuideCategory guides={guides} />;

export const query = graphql`
  {
    allContentfulGuide(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "guide_3" } } }
    ) {
      nodes {
        id
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Guide;
