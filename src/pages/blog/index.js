import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import Layout from "../../components/layout";
import BlogHeroImage from "../../components/pages/blog/blog-hero-image";
import Curve1 from "../../assets/images/curve-1.inline.svg";
import Curve3 from "../../assets/images/curve-3.inline.svg";

const Blog = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => (
  <Layout>
    <BlogHeroImage />
    <div className="position-relative">
      <div className="shape shape-bottom shape-fluid-x text-light">
        <Curve1 />
      </div>
    </div>
    <section className="pt-7 pt-md-10">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-0">Popular Stories</h3>

            <p className="mb-5 text-muted">
              Here’s what’s big in the past week!
            </p>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => {
            const { id, title, image } = blog;
            const pathToImage = getImage(image);
            const slug = slugify(title, { lower: true });
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

                  <a className="card-body" href="#!">
                    <h3>{title}</h3>

                    <p className="mb-0 text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis nec condimentum quam.
                    </p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
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
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Blog;
