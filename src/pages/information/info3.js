import React from "react";
import { graphql } from "gatsby";

import InfoList from "../../components/pages/info/info-list";
import information from "../../data/info";

const Guide = ({
  data: {
    allContentfulInfo: { nodes: info },
  },
}) => (
  <InfoList
    info={info}
    subTitle={information[2].subTitle}
    title={information[2].title}
  />
);

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
