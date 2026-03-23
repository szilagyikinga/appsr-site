import { graphql } from "gatsby";
import React from "react";
import GuideList from "../../components/pages/guide/guide-list";
import guidesList from "../../data/guides";

const Guide = ({
  data: {
    allContentfulGuide: { nodes: guides },
  },
}) => <GuideList guides={guides} title={guidesList[2].title} />;

export const query = graphql`
  {
    allContentfulGuide(
      sort: { title: ASC }
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
