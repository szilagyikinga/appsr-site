import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import factList from "../../../data/facts";

const FactElement = ({ fact: { title, image, link } }) => {
  return (
    <div className="col-12 col-md-4 product">
      <Link to={"fact/" + link} className="card card-flush mb-7">
        <div className="card-zoom">
          <GatsbyImage
            image={image}
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
};

const FactSection = () => {
  const { image1, image2, image3, image4 } = useStaticQuery(
    graphql`
      query {
        image1: file(relativePath: { eq: "portfolio-17.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image2: file(relativePath: { eq: "portfolio-18.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image3: file(relativePath: { eq: "portfolio-19.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        image4: file(relativePath: { eq: "portfolio-20.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );

  const pathToImage1 = getImage(image1);
  const pathToImage2 = getImage(image2);
  const pathToImage3 = getImage(image3);
  const pathToImage4 = getImage(image4);

  const facts = [
    {
      image: pathToImage1,
      title: factList[0].title,
      link: factList[0].link,
    },
    {
      image: pathToImage2,
      title: factList[1].title,
      link: factList[1].link,
    },
    {
      image: pathToImage3,
      title: factList[2].title,
      link: factList[2].link,
    },
    {
      image: pathToImage4,
      title: factList[3].title,
      link: factList[3].link,
    },
  ];

  return (
    <section className="pt-4 pt-md-6 pb-4 pb-md-6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2>Fiches pratiques</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="row"
          id="portfolio"
          data-isotope='{"layoutMode": "fitRows"}'
        >
          {facts.map((fact, index) => {
            return <FactElement fact={fact} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FactSection;
