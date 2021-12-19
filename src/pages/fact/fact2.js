import React from "react";
import { graphql } from "gatsby";

import FactList from "../../components/pages/fact/fact-list";

const Guide = ({
  data: {
    allContentfulSheet: { nodes: sheets },
  },
}) => <FactList sheets={sheets} />;

export const query = graphql`
  {
    allContentfulSheet(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "sheet_2" } } }
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
