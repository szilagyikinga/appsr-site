import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../services/slugify";
import Layout from "../../components/layout";
import Curve from "../../components/curve";

const Information = ({
  data: {
    allContentfulInfo: { nodes: infos },
  },
}) => (
  <Layout>
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
          {infos.map((info) => {
            const { id, title, image } = info;
            const pathToImage = getImage(image);
            const slug = slugify(title);
            return (
              <div key={id} className="col-12 col-md-4 product">
                <Link to={`${slug}`} className="card card-flush mb-7">
                  <div className="card-zoom">
                    <GatsbyImage
                      image={pathToImage}
                      alt={title}
                      className="card-img-top rounded shadow-light-lg"
                      placeholder="blurred"
                    />
                  </div>

                  <div className="card-footer">
                    {/* <h6 className="text-uppercase mb-1 text-muted">{title}</h6> */}

                    <h4 className="mb-0">{title}</h4>
                  </div>
                </Link>
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
    allContentfulInfo(sort: { fields: title, order: ASC }) {
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

export default Information;
