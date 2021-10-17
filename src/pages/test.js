import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import slugify from "slugify";

import Layout from "../components/layout";

const Test = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => (
  <Layout>
    <body className="bg-light">
      <section className="pt-8 pt-md-12 pb-12 pb-md-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h1 className="display-1 fw-bold">Our Work.</h1>
              <p className="lead text-secondary mb-4">
                We design & build products, tools, apps, and sites for companies
                trying to do great things for our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div
            className="row"
            id="portfolio"
            data-isotope='{"layoutMode": "fitRows"}'
          >
            {blogs.map((blog) => {
              const { id, title, image } = blog;
              const pathToImage = getImage(image);
              const slug = slugify(title, { lower: true });
              return (
                <div key={id} class="col-12 col-md-4 product">
                  <Link to={`/${slug}`} class="card card-flush mb-7">
                    <div class="card-zoom">
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        className="card-img-top rounded shadow-light-lg"
                        placeholder="blurred"
                      />
                    </div>

                    <div class="card-footer">
                      {/* <h6 class="text-uppercase mb-1 text-muted">{blog.title}</h6> */}

                      <h4 class="mb-0">{blog.title}</h4>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </body>
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

export default Test;
