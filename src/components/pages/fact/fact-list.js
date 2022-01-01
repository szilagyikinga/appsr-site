import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import slugify from "../../../services/slugify";

const FactList = ({ sheets, title }) => (
  <section class="py-4 py-md-6">
    <div class="container">
      <h2 className="display-5 text-center pb-6">{title}</h2>
      <div className="row">
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
                  <h4 className="mb-0">{title}</h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FactList;
