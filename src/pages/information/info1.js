import React from "react";
import { graphql } from "gatsby";

import InfoCategory from "../../components/pages/info/info-category";

const Guide = ({
  data: {
    allContentfulInfo: { nodes: info },
  },
}) => <InfoCategory info={info} />;

export const query = graphql`
  {
    allContentfulInfo(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "info_1" } } }
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
