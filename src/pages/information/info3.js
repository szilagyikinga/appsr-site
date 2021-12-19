import React from "react";
import { graphql } from "gatsby";

import InfoList from "../../components/pages/info/info-list";

const Guide = ({
  data: {
    allContentfulInfo: { nodes: info },
  },
}) => <InfoList info={info} />;

export const query = graphql`
  {
    allContentfulInfo(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "info_3" } } }
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
