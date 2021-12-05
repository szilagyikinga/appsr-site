import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../../services/slugify";
import Layout from "../../layout";

const GuideElement = ({ guide: { id, title } }) => {
  const slug = slugify(title);
  return (
    <div key={id} className="d-flex">
      <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
        <i className="fe fe-check"></i>
      </div>

      <Link to={`/guide/${slug}`} className="d-flex guide-link">
        <p class="text-success">{title}</p>
      </Link>
    </div>
  );
};

const GuideCategory = ({ guides }) => {
  const { image1Path, image2Path, image3Path, image4Path } = useStaticQuery(
    graphql`
      query {
        image1Path: file(relativePath: { eq: "photo-9.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image2Path: file(relativePath: { eq: "photo-10.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image3Path: file(relativePath: { eq: "photo-11.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image4Path: file(relativePath: { eq: "photo-12.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image1 = getImage(image1Path);
  const image2 = getImage(image2Path);
  const image3 = getImage(image3Path);
  const image4 = getImage(image4Path);
  return (
    <Layout>
      <section class="pt-10 pt-lg-9 pb-md-14 pb-lg-15 bg-white">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-12 col-md-6 col-lg-5">
              <span class="badge rounded-pill bg-success-soft mb-3">
                <span class="h6 text-uppercase">Support</span>
              </span>

              <h2>
                Our friendly support team <br />
                <span class="text-success">will help you with anything</span>.
              </h2>

              <p class="fs-lg text-gray-700 mb-6">
                We aim to take care of you. Need help with installation, find a
                bug, or just need a clarifiction about our documentation? We'll
                be there to lend a helping hand.
              </p>

              <div className="row">
                <div className="col-12 col-lg-6">
                  {guides.map((guide, index) => {
                    if (index * 2 < guides.length) {
                      return <GuideElement guide={guide} />;
                    }
                    return null;
                  })}
                </div>
                <div className="col-12 col-lg-6">
                  {guides.map((guide, index) => {
                    if (index * 2 >= guides.length) {
                      return <GuideElement guide={guide} />;
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="row">
                <div className="col-6 mt-8 me-n5">
                  <GatsbyImage
                    image={image2}
                    className="img-fluid mb-4 rounded"
                    alt=""
                  />
                  <GatsbyImage
                    image={image4}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
                <div className="col-6">
                  <GatsbyImage
                    image={image1}
                    className="img-fluid mb-4 rounded"
                    alt=""
                  />
                  <GatsbyImage
                    image={image3}
                    className="img-fluid rounded"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideCategory;
