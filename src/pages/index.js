import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import GuideSection from "../components/pages/home/guide";
import InformationSection from "../components/pages/home/information";
import BlogSection from "../components/pages/home/blog";

const IndexPage = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <GuideSection />
      <InformationSection />
      <BlogSection blogs={blogs} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlog(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        content {
          tags
        }
        excert
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default IndexPage;
