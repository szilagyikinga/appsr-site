import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const FactElement = ({ fact: { title, image, link } }) => {
  return (
    <div className="col-12 col-md-4 product">
      <Link to={link} className="card card-flush mb-7">
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
      title: "Remboursement assurance de prêt",
      link: "fact1",
    },
    {
      image: pathToImage2,
      title: "Questionnaire médical",
      link: "fact2",
    },
    {
      image: pathToImage3,
      title: "Droit à l'oubli",
      link: "fact3",
    },
    {
      image: pathToImage4,
      title: "Assurance de prêt est refusée",
      link: "fact4",
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
