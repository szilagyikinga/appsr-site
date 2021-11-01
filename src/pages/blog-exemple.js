import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";

import Layout from "../components/layout";

const Blog = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "cover-8.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(placeholderImage);
  const bgImage = convertToBgImage(image);
  return (
    <Layout>
      <BackgroundImage
        className="py-12 py-md-15 bg-cover"
        Tag="section"
        {...bgImage}
        preserveStackingContext
      ></BackgroundImage>

      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">
                Remote Work is the Future, but Should You Go Remote?
              </h1>

              <p className="lead mb-7 text-center text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec condimentum quam. Fusce pellentesque faucibus lorem at
                viverra. Integer at feugiat odio. In placerat euismod risus
                proin.
              </p>

              <div className="row align-items-center py-5 border-top border-bottom">
                <div className="col-auto">
                  <div className="avatar avatar-lg">
                    <img
                      src="assets/img/avatars/avatar-1.jpg"
                      alt="..."
                      className="avatar-img rounded-circle"
                    />
                  </div>
                </div>
                <div className="col ms-n5">
                  <h6 className="text-uppercase mb-0">Ab Hadley</h6>

                  <time className="fs-sm text-muted" dateTime="2019-05-20">
                    Published on May 20, 2019
                  </time>
                </div>
                <div className="col-auto">
                  <span className="h6 text-uppercase text-muted d-none d-md-inline me-4">
                    Share:
                  </span>

                  <ul className="d-inline list-unstyled list-inline list-social">
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src="./assets/img/icons/social/instagram.svg"
                          className="list-social-icon"
                          alt="..."
                        />
                      </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src="./assets/img/icons/social/facebook.svg"
                          className="list-social-icon"
                          alt="..."
                        />
                      </a>
                    </li>
                    <li className="list-inline-item list-social-item me-3">
                      <a href="#!" className="text-decoration-none">
                        <img
                          src="./assets/img/icons/social/twitter.svg"
                          className="list-social-icon"
                          alt="..."
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <figure className="figure mb-7">
                <img
                  className="figure-img img-fluid rounded lift lift-lg"
                  src="assets/img/photos/photo-27.jpg"
                  alt="..."
                />

                <figcaption className="figure-caption text-center">
                  This is a caption on this photo for reference
                </figcaption>
              </figure>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi reiciendis odio perferendis libero saepe voluptatum
                fugiat dolore voluptates aut, ut quas doloremque quo ad quis
                ipsum molestias neque pariatur commodi.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus, quidem, earum! Quo fugiat voluptates similique quidem
                dolorem ex non quibusdam odio suscipit error, maiores, itaque
                blanditiis vel, sed, cum velit?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h2 className="fw-bold">Big heading for a new topic</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi reiciendis odio perferendis libero saepe voluptatum
                fugiat dolore voluptates aut, ut quas doloremque quo ad quis
                ipsum molestias neque pariatur commodi.
              </p>
              <ul className="mb-0">
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis voluptatem nihil labore, recusandae, at nobis cumque
                  repellendus saepe maiores aperiam fuga vel tenetur placeat.
                  Officia, natus, cupiditate! Natus facere, explicabo?
                </li>
                <li className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                  dolorem modi corrupti excepturi quo enim odit deserunt culpa
                  blanditiis quidem doloribus, iusto aspernatur quisquam quod
                  numquam consequatur asperiores? Sint, dolor!
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h3 className="fw-bold">
                Small heading for a smaller transition
              </h3>

              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi reiciendis odio perferendis libero saepe voluptatum
                fugiat dolore voluptates aut, ut quas doloremque quo ad quis
                ipsum molestias neque pariatur commodi.
              </p>

              <hr className="hr-md mb-7" />

              <blockquote className="blockquote mb-7">
                <p className="h2 mb-0 text-center text-primary-desat">
                  “So many teams struggle to make their onboarding experience
                  anywhere near as good as their core product, so the results of
                  this is poor retention”
                </p>
              </blockquote>

              <hr className="hr-md mb-7" />

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam ducimus provident, quos sint hic, quidem voluptatibus.
                Quasi, distinctio cupiditate, omnis vitae maxime nisi eum
                similique libero ad dolore sint tempora.
              </p>

              <ul className="list-unstyled mb-7">
                <li className="d-flex">
                  <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis quo labore, deleniti optio non, voluptate illo
                    doloribus odio iure molestiae eos tempora nobis.
                  </p>
                </li>
                <li className="d-flex">
                  <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis quo labore, deleniti optio non, voluptate illo
                    doloribus odio iure molestiae eos tempora nobis.
                  </p>
                </li>
                <li className="d-flex">
                  <div className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                    <i className="fe fe-check"></i>
                  </div>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis quo labore, deleniti optio non, voluptate illo
                    doloribus odio iure molestiae eos tempora nobis.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h3 className="fw-bold">
                Small heading for a smaller transition
              </h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi reiciendis odio perferendis libero saepe voluptatum
                fugiat dolore voluptates aut, ut quas doloremque quo ad quis
                ipsum molestias neque pariatur commodi.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                quos, commodi fugiat? Repellat accusantium error quisquam autem
                magni. Placeat ea dolorem voluptatem sequi veritatis, fugit nisi
                omnis, aspernatur sint quidem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
