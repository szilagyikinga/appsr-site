import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../../services/slugify";
import Curve1 from "../../../images/curve-1.inline.svg";
import Layout from "../../layout";

const Fact = ({ sheets, title }) => (
  <Layout darkNavigation darkFooter>
    <section className="mt-n11 pt-12 pb-8 pt-md-14 bg-black bg-pattern-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <h1
              className="display-1 fw-bold text-white"
              // data-aos="fade-up"
              // data-aos-delay="50"
            >
              {title}
            </h1>
            <p class="lead text-muted mb-9">
              We make it easy by including all of the necessary assets from
              fonts to illustrations to icongraphy.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="position-relative">
      <div class="shape shape-bottom shape-fluid-x text-dark">
        <Curve1 />
      </div>
    </div>
    <section class="bg-gradient-dark-black py-8 py-md-11">
      <div class="container">
        <div className="row mt-n7">
          {sheets.map((sheet) => {
            const { id, title, image } = sheet;
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
                    <h4 className="mb-0 text-white">{title}</h4>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <div class="bg-black">
      <div class="container border-top border-gray-900-50"></div>
    </div>
  </Layout>
);

export default Fact;
