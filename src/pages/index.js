import * as React from "react";

import Layout from "../components/layout";
import GuideSection from "../components/pages/home/guide";
import InformationSection from "../components/pages/home/information";

const IndexPage = () => {
  return (
    <Layout>
      <GuideSection />
      <InformationSection />
    </Layout>
  );
};

export default IndexPage;
