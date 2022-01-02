import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../services/slugify";
import Layout from "../../components/layout";
import Curve from "../../components/curve";
import BlogHeroImage from "../../components/pages/blog/blog-hero-image";
import Curve3 from "../../images/curve-3.inline.svg";

const Blog = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => (
  <Layout>
    <BlogHeroImage />
    <Curve className="text-white" />
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row">
          {blogs.map((blog) => {
            const { id, title, image, excert } = blog;
            const pathToImage = getImage(image);
            const slug = slugify(title);
            return (
              <div key={id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                  <Link to={`${slug}`} className="card-img-top">
                    <GatsbyImage
                      image={pathToImage}
                      alt={title}
                      className="card-img-top"
                      placeholder="blurred"
                    />

                    <div className="position-relative">
                      <div className="shape shape-bottom shape-fluid-x text-white">
                        <Curve3 />
                      </div>
                    </div>
                  </Link>

                  <Link to={`${slug}`} className="card-body">
                    <h3>{title}</h3>

                    <p className="mb-0 text-muted">{excert}&nbsp;...</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Curve className="text-gray-200" />
  </Layout>
);

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

export default Blog;
