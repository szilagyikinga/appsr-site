import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../../services/slugify";
import Curve3 from "../../../images/curve-3.inline.svg";

const BlogSection = ({ blogs }) => (
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 fw-bold mb-5">En direct du blog</h2>
        </div>
      </div>
      <div className="row">
        {blogs.map((blog) => {
          const { id, title, image, excert } = blog;
          const pathToImage = getImage(image);
          const slug = slugify(title);
          return (
            <div key={id} className="col-12 col-md-6 col-lg-4 d-flex">
              <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">
                <Link to={`blog/${slug}`} className="card-img-top">
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

                <Link to={`blog/${slug}`} className="card-body">
                  <h3>{title}</h3>
                  <p className="mb-0 text-muted">{excert}</p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default BlogSection;
