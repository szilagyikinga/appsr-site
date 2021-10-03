import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const Test = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => {
  return (
    <main className="page">
      <section className="about-page">
        <article>
          <h2>I'm baby coloring book poke taxidermy</h2>
        </article>
        <StaticImage
          src="../assets/images/about.jpeg"
          alt="Person Pouring Salt in Bowl"
          className="about-img"
          placeholder="blurred"
        />
      </section>
      <section className="featured-recipes">
        <h5>Consulter un article</h5>
      </section>
    </main>
  );
};

export const myquery = graphql`
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
      }
    }
  }
`;

export default Test;
