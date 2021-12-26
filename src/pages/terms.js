import * as React from "react";

import Layout from "../components/layout";
import Curve1 from "../images/curve-1.inline.svg";

const TermsOfServices = () => {
  return (
    <Layout darkFooter>
      <section className="pt-8 pt-md-11 pb-8 pb-md-14">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md">
              <h1 className="display-4 mb-2">Mentions légales</h1>

              <p className="fs-lg text-gray-700 mb-md-0">
                mise à jour 30/09/2021
              </p>
            </div>
            {/* <div className="col-auto">
              <a href="#!" className="btn btn-primary-soft">
                Imprimer
              </a>
            </div> */}
          </div>
          <div className="row">
            <div className="col-12">
              <hr className="my-6 my-md-8" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              <h3 className="mb-5">ARTICLE 1. INFORMATIONS LÉGALES</h3>

              <p className="text-gray-800">
                En vertu de l'article 6 de la Loi n° 2004-575 du 21 juin 2004
                pour la confiance dans l'économie numérique, il est précisé dans
                cet article l'identité des différents intervenants dans le cadre
                de sa réalisation et de son suivi.
              </p>
              <p className="text-gray-800">
                Le site APPSR.FR est édité par&nbsp;:
              </p>
              <p className="text-gray-800">
                Association de Promotion de Prévoyance, Santé et Retraite
                (APPSR), dont le siège social est situé à l'adresse
                suivante&nbsp;: 120 avenue du général Leclerc 75014 Paris, et
                immatriculée au registre suivant&nbsp;: RNA&nbsp;: W751202246.
              </p>
              <p className="text-gray-800">
                Adresse e-mail&nbsp;: contact@appsr.fr.
              </p>
              <p className="text-gray-800">
                <br />
                Le directeur de publication du site est&nbsp;: Gérard MIHRANYAN.
              </p>
              <p className="text-gray-800">
                <br />
                Le site APPSR.FR est hébergé par&nbsp;:
              </p>
              <p className="text-gray-800">
                OVH SAS, dont le siège est situé à l'adresse ci-après&nbsp;:
              </p>
              <p className="text-gray-800" style={{ paddingLeft: "30px" }}>
                2 rue Kellermann 59100 Roubaix
              </p>
              <p className="text-gray-800">
                <h3 className="mb-5">ARTICLE 2. PRÉSENTATION DU SITE</h3>
              </p>
              <p className="text-gray-800">
                Le site APPSR.FR a pour objet&nbsp;:
              </p>
              <p className="text-gray-800" style={{ paddingLeft: "30px" }}>
                Informer ses utilisateurs en matière de prévoyance, de santé, de
                retraite et d'épargne.
              </p>
              <p className="text-gray-800">
                <h3 className="mb-5">ARTICLE 3. CONTACT</h3>
              </p>
              <p className="text-gray-800">
                Pour toute question ou demande d'information concernant le site,
                ou tout signalement de contenu ou d'activités illicites,
                l'utilisateur peut contacter l'éditeur à l'adresse e-mail
                suivante: contact@appsr.fr ou adresser un courrier recommandé
                avec accusé de réception à&nbsp;: Association de Promotion de
                Prévoyance, Santé et Retraite (APPSR) - 120 avenue du général
                Leclerc 75014 Paris
              </p>
              <p className="text-gray-800">
                <h3 className="mb-5">
                  ARTICLE 4. ACCEPTATION DES CONDITIONS D'UTILISATION
                </h3>
              </p>
              <p className="text-gray-800">
                L'accès et l'utilisation du site sont soumis à l'acceptation et
                au respect des présentes Conditions Générales d'Utilisation.
              </p>
              <p className="text-gray-800">
                L'éditeur se réserve le droit de modifier, à tout moment et sans
                préavis, le site et des services ainsi que les présentes CGU,
                notamment pour s'adapter aux évolutions du site par la mise à
                disposition de nouvelles fonctionnalités ou la suppression ou la
                modification de fonctionnalités existantes.
              </p>
              <p className="text-gray-800">
                Il est donc conseillé à l'utilisateur de se référer avant toute
                navigation à la dernière version des CGU, accessible à tout
                moment sur le site. En cas de désaccord avec les CGU, aucun
                usage du site ne saurait être effectué par l'utilisateur.
              </p>
              <h3 className="mb-5">ARTICLE 5. ACCÈS ET NAVIGATION</h3>
              <p className="text-gray-800">
                L'éditeur met en œuvre les solutions techniques à sa disposition
                pour permettre l'accès au site 24 heures sur 24, 7 jours sur 7.
                Il pourra néanmoins à tout moment suspendre, limiter ou
                interrompre l'accès au site ou à certaines pages de celui-ci
                afin de procéder à des mises à jours, des modifications de son
                contenu ou tout autre action jugée nécessaire au bon
                fonctionnement du site.
              </p>
              <p className="text-gray-800">
                Les présentes CGU s'appliquent, en tant que de besoin, à toute
                déclinaison ou extension du site sur les réseaux sociaux et/ou
                communautaires existants ou à venir.
              </p>
              <h3 className="mb-5">ARTICLE 6. GESTION DU SITE</h3>
              <p className="text-gray-800">
                Pour la bonne gestion du site, l'éditeur pourra à tout
                moment&nbsp;:
              </p>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Suspendre, interrompre ou limiter l'accès à tout ou partie du
                  site, réserver l'accès au site, ou à certaines parties du
                  site, à une catégorie déterminée d'internaute&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Supprimer toute information pouvant en perturber le
                  fonctionnement ou entrant en contravention avec les lois
                  nationales ou internationales, ou avec les règles de la
                  Nétiquette&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Suspendre le site afin de procéder à des mises à jour.
                  <br />
                  <br />
                </p>
              </div>

              <h3 className="mb-5">ARTICLE 7. RESPONSABILITÉS</h3>
              {/* </p> */}
              <p className="text-gray-800">
                L'éditeur n'est responsable que du contenu qu'il a lui-même
                édité.
              </p>
              <p className="text-gray-800">
                L'éditeur n'est pas responsable&nbsp;:
              </p>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  En cas de problématiques ou défaillances techniques,
                  informatiques ou de compatibilité du site avec un matériel ou
                  logiciel quel qu'il soit&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Des dommages directs ou indirects, matériels ou immatériels,
                  prévisibles ou imprévisibles résultant de l'utilisation ou des
                  difficultés d'utilisation du site ou de ses services&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Des caractéristiques intrinsèques de l'Internet, notamment
                  celles relatives au manque de fiabilité et au défaut de
                  sécurisation des informations y circulant&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  Des contenus ou activités illicites utilisant son site et ce,
                  sans qu’il en ait pris dûment connaissance au sens de la Loi
                  n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie
                  numérique et du Règlement Général européen sur la Protection
                  des Données (RGPD) relatif à la protection des personnes
                  physiques à l’égard de traitement de données à caractère
                  personnel.
                  <br />
                  <br />
                </p>
              </div>

              <p className="text-gray-800">
                Par ailleurs, le site ne saurait garantir l'exactitude, la
                complétude, et l'actualité des informations qui y sont
                diffusées.
              </p>

              <p className="text-gray-800">
                L'utilisateur est responsable&nbsp;:
              </p>
              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  De la protection de son matériel et de ses données&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  De l'utilisation qu'il fait du site ou de ses services&nbsp;;
                  <br />
                  <br />
                </p>
              </div>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>
                <p className="text-gray-800 mb-6 mb-md-0">
                  S'il ne respecte ni la lettre, ni l'esprit des présentes CGU.
                  <br />
                  <br />
                </p>
              </div>

              <p className="text-gray-800">
                <h3 className="mb-5">ARTICLE 8. LIENS HYPERTEXTES</h3>
              </p>
              <p className="text-gray-800">
                Le site peut contenir des liens hypertextes pointant vers
                d'autres sites internet sur lesquels APPSR.FR n'exerce pas de
                contrôle. Malgré les vérifications préalables et régulières
                réalisés par l'éditeur, celui-ci décline tout responsabilité
                quant aux contenus qu'il est possible de trouver sur ces sites.
              </p>
              <p className="text-gray-800">
                L'éditeur autorise la mise en place de liens hypertextes vers
                toute page ou document de son site sous réserve que la mise en
                place de ces liens ne soit pas réalisée à des fins commerciales
                ou publicitaires.
              </p>
              <p className="text-gray-800">
                En outre, l'information préalable de l'éditeur du site est
                nécessaire avant toute mise en place de lien hypertexte.
              </p>
              <p className="text-gray-800">
                Sont exclus de cette autorisation les sites diffusant des
                informations à caractère illicite, violent, polémique,
                pornographique, xénophobe ou pouvant porter atteinte à la
                sensibilité du plus grand nombre.
              </p>
              <p className="text-gray-800">
                Enfin, APPSR.FR se réserve le droit de faire supprimer à tout
                moment un lien hypertexte pointant vers son site, si le site
                l'estime non conforme à sa politique éditoriale.
              </p>
              <p className="text-gray-800">
                <h3 className="mb-5">ARTICLE 9&nbsp;: CONFIDENTIALITÉ </h3>
              </p>
              <p className="text-gray-800">
                En plus des présentes Conditions Générales, le site dispose
                d'une politique de confidentialité qui décrit la manière dont
                les données à caractère personnel sont traitées lorsque
                l'utilisateur se rend sur le site, ainsi que la manière dont les
                cookies sont utilisés.
              </p>
              <p className="text-gray-800">
                En naviguant sur le site, l'utilisateur déclare avoir également
                pris connaissance de la politique de confidentialité
                susmentionnée.
              </p>
              <h3 className="mb-5">ARTICLE 10. PROPRIÉTÉ INTELLECTUELLE</h3>
              <p className="text-gray-800">
                La structuration du site mais aussi les textes, graphiques,
                images, photographies, sons, vidéos et applications
                informatiques qui le composent sont la propriété de l'éditeur et
                sont protégés comme tels par les lois en vigueur au titre de la
                propriété intellectuelle.
              </p>
              <p className="text-gray-800">
                Toute représentation, reproduction, adaptation ou exploitation
                partielle ou totale des contenus, marques déposées et services
                proposés par le site, par quelque procédé que ce soit, sans
                l'autorisation préalable, expresse et écrite de l'éditeur, est
                strictement interdite et serait susceptible de constituer une
                contrefaçon au sens des articles L. 335-2 et suivants du Code de
                la propriété intellectuelle. Et ce, à l'exception des éléments
                expressément désignés comme libres de droits sur le site.
              </p>
              <p className="text-gray-800">
                L'accès au site ne vaut pas reconnaissance d'un droit et, de
                manière générale, ne confère aucun droit de propriété
                intellectuelle relatif à un élément du site, lesquels restent la
                propriété exclusive de l'éditeur.
              </p>
              <p className="text-gray-800">
                Il est interdit à l'utilisateur d'introduire des données sur le
                site qui modifieraient ou qui seraient susceptibles d'en
                modifier le contenu ou l'apparence.
              </p>
              <h3 className="mb-5">ARTICLE 11. DURÉE</h3>
              <p className="text-gray-800">
                La durée du présent contrat est indéterminée. Le contrat produit
                ses effets à l'égard de l'Utilisateur à compter de l'utilisation
                du service.
              </p>
              <h3 className="mb-5">
                ARTICLE 12. DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
              </h3>
              <p className="text-gray-800">
                La législation française s'applique au présent contrat. En cas
                d'absence de résolution amiable d'un litige né entre les
                parties, seuls les tribunaux de la ville de Paris sont
                compétents.
              </p>
              <h3 className="mb-5">Additional Terms</h3>

              <p className="text-gray-800">
                By visiting and/or taking any action on Bootstrap Themes, you
                confirm that you are in agreement with and bound by the terms
                outlined below. These terms apply to the website, emails, or any
                other communication.
              </p>

              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>

                <p className="text-gray-800">
                  All payments are processed securely through PayPal or Stripe.
                  Bootstrap Themes does not directly process payments through
                  the website.
                </p>
              </div>
              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>

                <p className="text-gray-800">
                  You have 14 days to evaluate your purchase. If your purchase
                  fails to meet expectations set by the seller, or is critically
                  flawed in some way, contact Bootstrap Themes and we will issue
                  a full refund pending a review.
                </p>
              </div>
              <div className="d-flex">
                <span className="badge badge-rounded-circle bg-success-soft mt-1 me-4">
                  <i className="fe fe-check"></i>
                </span>

                <p className="text-gray-800 mb-6 mb-md-0">
                  Membership is a benefit for those who follow our terms and
                  policies. We may at any time suspend or terminate your
                  account.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card shadow-light-lg">
                <div className="card-body">
                  <h4>Beoin d'un renseignement ?</h4>
                  <br />

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Par voie postale
                  </h6>

                  <p className="fs-sm mb-5">
                    APPSR
                    <br />
                    120 avenue du général Leclerc
                    <br />
                    75014 Paris
                  </p>

                  <h6 className="fw-bold text-uppercase text-gray-700 mb-2">
                    Par E-mail
                  </h6>

                  <p className="fs-sm mb-0">
                    <a href="mailto:contact@appsr.fr" className="text-reset">
                      contact@appsr.fr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-bottom shape-fluid-x text-dark">
          <Curve1 className="text-black" />
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfServices;
