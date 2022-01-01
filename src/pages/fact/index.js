import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/layout";
import FactList from "../../components/pages/fact/fact-list";
import facts from "../../data/facts";

const Fact = ({
  data: {
    allContentfulSheet: { nodes: sheets },
  },
}) => {
  const sheets1 = sheets.filter((sheet) =>
    sheet.content.tags.includes("sheet_1")
  );
  const sheets2 = sheets.filter((sheet) =>
    sheet.content.tags.includes("sheet_2")
  );
  const sheets3 = sheets.filter((sheet) =>
    sheet.content.tags.includes("sheet_3")
  );
  const sheets4 = sheets.filter((sheet) =>
    sheet.content.tags.includes("sheet_4")
  );

  return (
    <Layout>
      <section className="mt-n11 pt-12 pb-8 pt-md-14">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h1 className="display-1 fw-bold">
                The UI framework that you'll actually love to use.
              </h1>
              <p className="lead text-muted mb-9">
                We make it easy by including all of the necessary assets from
                fonts to illustrations to icongraphy.
              </p>
            </div>
          </div>
        </div>
      </section>
      <FactList sheets={sheets1} title={facts[0].title} />
      <FactList sheets={sheets2} title={facts[1].title} />
      <FactList sheets={sheets3} title={facts[2].title} />
      <FactList sheets={sheets4} title={facts[3].title} />
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulSheet(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Fact;
