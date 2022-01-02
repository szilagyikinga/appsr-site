import React from "react";
import { graphql } from "gatsby";

import Article from "../../components/article";

const BlogTemplate = ({ data }) => {
  const {
    title,
    image,
    childContentfulBlogDescriptionTextNode: {
      childMarkdownRemark: { html },
    },
  } = data.contentfulBlog;

  return <Article title={title} image={image} html={html} />;
};

export const query = graphql`
  query getSingleBlog($title: String) {
    contentfulBlog(title: { eq: $title }) {
      childContentfulBlogDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      title
      content {
        tags
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default BlogTemplate;
