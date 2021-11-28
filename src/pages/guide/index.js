import React from "react";

import Layout from "../../components/layout";
import Curve from "../../components/curve";
import GuideContent from "../../components/pages/guide/guide-content";

const Guide = () => {
  return (
    <Layout darkNavigation>
      <section
        className="pt-12 pt-md-14 pb-12 pb-md-15 bg-gray-900"
        style={{ marginTop: -87 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 text-center">
              <h1 className="display-2 fw-bold text-white">Our Work.</h1>

              <p className="lead text-white-75 mb-4">
                We design & build products, tools, apps, and sites for companies
                trying to do great things for our planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Curve className="text-light" />
      <section className="py-8 py-md-11 mt-n10 mt-md-n14">
        <GuideContent />
      </section>
      <Curve className="text-gray-200" />
    </Layout>
  );
};

export default Guide;
