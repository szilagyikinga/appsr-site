import React from "react";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import slugify from "../../services/slugify";
import Layout from "../../components/layout";

const Focus = ({
  data: {
    allContentfulFocus: { nodes: focuses },
  },
}) => (
  <Layout>
    <body className="bg-light">
      <section className="py-8 py-md-12">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="display-3 fw-bold">
                Assurance de prêt et maladie
              </h1>
              <p className="lead text-secondary mb-4">
                Comment obtenir une assurance de prêt en cas de maladie ? <br />
                La question nous est souvent posée car le parcours de santé peut
                parfois refroidir certains assureurs. Quelques rappels sur la
                convention AERAS et sur les solutions alternatives qui s'offrent
                à vous.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-8 pb-md-11">
        <div className="container">
          <div class="row">
            {focuses.map((focus) => {
              const { id, title, image } = focus;
              const pathToImage = getImage(image);
              const bgImage = convertToBgImage(pathToImage);
              const slug = slugify(title);

              return (
                <Link
                  key={id}
                  to={slug}
                  className="col-12 col-md-6 col-lg-4 d-flex"
                >
                  <div
                    className="overlay overlay-black overlay-30 mb-6 card bg-cover shadow-light-lg"
                    style={{ overflow: "hidden" }}
                  >
                    <BackgroundImage
                      Tag="div"
                      className="pt-14"
                      {...bgImage}
                      preserveStackingContext
                    >
                      <div
                        className="card-body mt-auto"
                        style={{ textDecoration: "none" }}
                      >
                        <h3 className="text-white">{title}</h3>

                        <p className="mb-0 text-white">
                          A much lighter overlay work on darker photos, and is
                          easy to control with utilities.
                        </p>
                      </div>
                    </BackgroundImage>
                  </div>
                </Link>
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
    allContentfulFocus(sort: { fields: title, order: ASC }) {
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

export default Focus;
