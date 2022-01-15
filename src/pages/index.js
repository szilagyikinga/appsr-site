import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import GuideSection from "../components/pages/home/guide";
import InformationSection from "../components/pages/home/information";
import BlogSection from "../components/pages/home/blog";

import LogoAlesio from "../images/logo-AESIO.inline.svg";
import LogoForever from "../images/logo-FOREVER.inline.svg";
import LogoGenerali from "../images/logo-GENERALI.inline.svg";
import LogoHarmonieMutuelle from "../images/logo-HARMONIE_MUTUELLE.inline.svg";
import LogoMagnolia from "../images/logo-MAGNOLIA.inline.svg";
import LogoMncap from "../images/logo-MNCAP.inline.svg";
import LogoPrepar from "../images/logo-PREPAR.inline.svg";
import LogoPrevoir from "../images/logo-PREVOIR.inline.svg";
import LogoSimulassur from "../images/logo-SIMULASSUR.inline.svg";

const IndexPage = ({
  data: {
    allContentfulBlog: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <GuideSection />
      <section className="pt-6 pt-md-8 pb-md-2 border-bottom border-top">
        <div className="container">
          <div className="row justify-content-center" style={{ opacity: 0.5 }}>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoAlesio />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoForever />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoGenerali />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoHarmonieMutuelle />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoMagnolia />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoMncap />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoPrepar />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoPrevoir />
              </div>
            </div>
            <div className="col-4 col-md-3 col-lg-2 mb-6">
              <div className="img-fluid text-dark">
                <LogoSimulassur />
              </div>
            </div>
          </div>
        </div>
      </section>
      <InformationSection />
      <BlogSection blogs={blogs} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlog(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        content {
          tags
        }
        excert
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default IndexPage;
