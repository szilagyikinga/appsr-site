import * as React from "react";
import { Link } from "gatsby";

const information = [
  {
    title: "Délégation d'assurance",
    subTitle: "De quoi s'agit-il ? Comment procéder...",
    link: "info1",
  },
  {
    title: "Rachat d'assurance de prêt",
    subTitle: "Mode de calcul et taux annuel effectif...",
    link: "info2",
  },
  {
    title: "Assurance de prêt et âge",
    subTitle: "Age limite ? Assurance de prêt pour les Séniors...",
    link: "info3",
  },
];

const InfoElement = ({ info: { link, title, subTitle } }) => (
  <Link
    to={`/information/${link}`}
    className="list-group-item d-flex align-items-center"
  >
    <div className="me-auto info-link">
      <p className="fw-bold mb-1">{title}</p>

      <p className="fs-sm text-muted mb-0">{subTitle}</p>
    </div>
  </Link>
);

const InformationSection = () => {
  return (
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 order-md-2">
            <h2>Information</h2>

            <p className="fs-lg text-muted mb-6 mb-md-0">
              Enfin prêt pour changer d'assurance ? <br />
              Mais à quel taux ? Et comment procéder...
              <br />
              <br />
              Nos articles détaillées vous orienteront au cours des différentes
              étapes de la négociation de votre prêt.
            </p>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="card card-border border-success shadow-lg">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  {information.map((info) => (
                    <InfoElement info={info} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
