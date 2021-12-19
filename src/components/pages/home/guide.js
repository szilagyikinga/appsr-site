import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const guides = [
  {
    title: "Les points à savoir",
    link: "guide1",
  },
  {
    title: "La Délégation",
    link: "guide2",
  },
  {
    title: "Les garanties",
    link: "guide3",
  },
  {
    title: "Re) Négocier",
    link: "guide4",
  },
];

const GuideElement = ({ guide: { link, title } }) => (
  <div className="d-flex">
    <Link to={`/guide/${link}`} className="d-flex guide-link">
      <p>{title}</p>
    </Link>
  </div>
);

const GuideSection = () => {
  const { guideImagePath } = useStaticQuery(
    graphql`
      query {
        guideImagePath: file(relativePath: { eq: "illustration-3.png" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const guideImage = getImage(guideImagePath);
  return (
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <h2>Les Guides.</h2>

            <p className="fs-lg text-gray-700 mb-6">
              Qu'est-ce qu'une délégation d'assurance ? Comment renégocier le
              taux de son assurance ? Retrouvez toutes les informations
              détaillées sur l'assurance de prêt au travers de nos quatre guides
              dédiés.
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
          <div className="col-12 col-md-6">
            <GatsbyImage
              image={guideImage}
              className="img-fluid mw-md-130"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
