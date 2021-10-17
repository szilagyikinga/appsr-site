import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlogsList from "../components/BlogsList";

const Secondtest = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <main className="page">
        <section className="featured-recipes">
          <h5>Consulter un article</h5>
          <BlogsList blogs={blogs} />
        </section>
      </main>
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
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Secondtest;
