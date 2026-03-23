import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import React from "react";

import BgImage from "../../components/bg-image";
import Layout from "../../components/layout";
import slugify from "../../services/slugify";

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
                    <BgImage image={pathToImage} Tag="div" className="py-8">
                      <div
                        className="card-body mt-auto"
                        style={{ textDecoration: "none" }}
                      >
                        <h3 className="display-5 text-white fw-bold text-center">
                          {title}
                        </h3>
                      </div>
                    </BgImage>
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
    allContentfulFocus(sort: { title: ASC }) {
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
