import React from "react";
import { graphql } from "gatsby";

import GuideList from "../../components/pages/guide/guide-list";
import guidesList from "../../data/guides";

const Guide = ({
  data: {
    allContentfulGuide: { nodes: guides },
  },
}) => <GuideList guides={guides} title={guidesList[1].title} />;

export const query = graphql`
  {
    allContentfulGuide(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: "guide_2" } } }
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
