import React from "react";
import { graphql } from "gatsby";

import FactList from "../../components/pages/fact/fact-list";
import facts from "../../data/facts";

const Fact = ({
  data: {
    allContentfulSheet: { nodes: sheets },
  },
}) => <FactList sheets={sheets} title={facts[0].title} />;

export const query = graphql`
  {
    allContentfulSheet(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "sheet_1" } } }
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

export default Fact;
