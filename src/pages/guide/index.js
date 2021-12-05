import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import Curve from "../../components/curve";
import HeroImage from "../../components/pages/guide/hero-image";

const Guide = () => {
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

  const guides = [
    {
      image: pathToImage1,
      title: "Le guide de l'assurance de prêt",
      subTitle: "??????????",
      link: "guide1",
    },
    {
      image: pathToImage2,
      title: "Délégation d'assurance",
      subTitle: "??????????",
      link: "guide2",
      style: "large",
    },
    {
      image: pathToImage3,
      title: "Guaratie d'assurance emprunteur",
      subTitle: "??????",
      link: "guide3",
      style: "large",
    },
    {
      image: pathToImage4,
      title: "Négotiation d'assurance de prêt",
      subTitle: "?????????",
      link: "guide4",
    },
  ];

  return (
    <Layout darkNavigation>
      <HeroImage />
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <div className="container">
          <div
            className="row"
            id="portfolio"
            // dataIsotope={{ layoutMode: "masonry" }}
          >
            {guides.map((guide) => {
              const { link, title, subTitle, image } = guide;
              return (
                <div key={link} className="col-12 col-md-6 resources">
                  <Link
                    to={`/guide/${link}`}
                    className="card shadow-light-lg mb-7"
                  >
                    <div className="card-zoom">
                      <GatsbyImage
                        image={image}
                        alt={title}
                        className="card-img"
                        placeholder="blurred"
                      />
                    </div>

                    <div className="card-img-overlay card-img-overlay-hover">
                      <div className="card-body bg-white">
                        <div className="shape shape-bottom-100 shape-fluid-x text-white">
                          <Curve />
                        </div>

                        <h6 className="text-uppercase mb-1 text-muted">
                          {title}
                        </h6>

                        <h4 className="mb-0">{subTitle}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Curve className="text-gray-200" />
    </Layout>
  );
};

export default Guide;
