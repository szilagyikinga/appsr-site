import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../../services/slugify";
import GuideListHeroImage from "./guide-list-hero-image";
import Layout from "../../layout";
import Curve1 from "../../../images/curve-1.inline.svg";

const GuideList = ({ guides }) => {
  return (
    <Layout isDark>
      <GuideListHeroImage />
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div
            className="row"
            id="portfolio"
            // dataIsotope={{ layoutMode: "masonry" }}
          >
            {guides.map((guide) => {
              const { id, title, image } = guide;
              const pathToImage = getImage(image);
              const slug = slugify(title);
              return (
                <div key={id} className="col-12 col-md-4 resources">
                  <Link
                    to={`/guide/${slug}`}
                    className="card shadow-light-lg mb-7"
                  >
                    <div className="card-zoom">
                      <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        className="card-img"
                        placeholder="blurred"
                      />
                    </div>

                    <div className="card-img-overlay card-img-overlay-hover">
                      <div className="card-body bg-white">
                        <div className="shape shape-bottom-100 shape-fluid-x text-white">
                          <Curve1 />
                        </div>

                        <h6 className="text-uppercase mb-1 text-muted">
                          {guide.title}
                        </h6>

                        <h4 className="mb-0">Curology Any Face Campaign</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuideList;
