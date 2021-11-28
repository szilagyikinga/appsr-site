import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";

const Contact = () => {
  const { placeholderImage1, placeholderImage2 } = useStaticQuery(
    graphql`
      query {
        placeholderImage1: file(relativePath: { eq: "cover-10.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        placeholderImage2: file(relativePath: { eq: "photo-5.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image1 = getImage(placeholderImage1);
  const image2 = getImage(placeholderImage2);
  const bgImage1 = convertToBgImage(image1);
  return (
    <Layout full>
      <section>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between gx-0 min-vh-100">
            <div className="col-12 col-md-5 align-self-stretch">
              <BackgroundImage
                Tag="div"
                className="d-none d-md-block vw-50 h-100 float-end bg-cover"
                {...bgImage1}
                preserveStackingContext
              />
              <GatsbyImage
                image={image2}
                className="d-md-none img-cover"
                alt=""
              />
              {/* <img src={ImageSmall} className="d-md-none img-cover" alt="" /> */}

              {/* <div className="d-none d-md-block vw-50 h-100 float-end bg-cover" style="background-image: url(assets/img/covers/cover-10.jpg);"></div> */}
            </div>
            <div className="col-12 col-md-6 py-8 py-md-11">
              <h2 className="fw-bold text-center mb-2">
                Contact us for anything.
              </h2>

              <p className="fs-lg text-center text-muted mb-0">
                Our goal is to be as helpful as possible.
              </p>

              <hr className="hr-sm my-6 my-md-8 mx-auto bg-gray-300" />

              <form>
                <div className="form-group mb-5">
                  <label className="form-label" for="contactName">
                    Full name
                  </label>

                  <input
                    className="form-control"
                    id="contactName"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="form-group mb-5">
                  <label className="form-label" for="contactEmail">
                    Email
                  </label>

                  <input
                    className="form-control"
                    id="contactEmail"
                    type="email"
                    placeholder="hello@domain.com"
                  />
                </div>
                <div className="form-group mb-5 d-none">
                  <label for="contactMessage">What can we help you with?</label>

                  <textarea
                    className="form-control"
                    id="contactMessage"
                    rows="5"
                    placeholder="Tell us what we can help you with!"
                  ></textarea>
                </div>
                <div className="form-group mb-0">
                  <a href="#!" className="btn w-100 btn-primary lift">
                    Send message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
