import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const guides = [
  {
    title: "Le guide de l'assurance de prêt",
    link: "guide1",
  },
  {
    title: "Délégation d'assurance",
    link: "guide2",
  },
  {
    title: "Guaratie d'assurance emprunteur",
    link: "guide3",
  },
  {
    title: "Négotiation d'assurance de prêt",
    link: "guide4",
  },
];

const GuideElement = ({ guide: { link, title } }) => (
  <div className="d-flex">
    <div className="badge badge-rounded-circle bg-primary-soft mt-1 me-4">
      <i className="fe fe-check"></i>
    </div>

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
    <section className="py-8 py-md-12">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <span className="badge rounded-pill bg-primary-soft mb-3">
              <span className="h6 text-uppercase">Les guides</span>
            </span>
            <h2>
              Don't worry about pricing. <br />
              <span className="text-primary">We maximize your earnings</span>.
            </h2>

            <p className="fs-lg text-gray-700 mb-6">
              Instead of constantly worrying about when your home will be in
              demand, just share your availability and we will price based on
              popularity of your listing, seasonal factors, nearby events, and
              more.
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
