import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/layout";

const BlogTemplate = ({ data }) => {
  const {
    title,
    content,
    description: { description },
    image,
  } = data.contentfulBlog;
  const pathToImage = getImage(image);
  const { tags } = content;
  return (
    <Layout>
      <section className="pt-8 pt-md-11">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <h1 className="display-4 text-center">{title}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6 pt-md-8">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
              <figure className="figure mb-7">
                <GatsbyImage
                  image={pathToImage}
                  alt={title}
                  className="figure-img img-fluid rounded lift lift-lg"
                />
              </figure>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
  // return (
  //   <Layout>
  //     <main className="page">
  //       <div className="recipe-page">
  //         <section className="recipe-hero">
  //           <GatsbyImage
  //             image={pathToImage}
  //             alt={title}
  //             className="about-img"
  //           />
  //           <article className="recipe-info">
  //             <h2>{title}</h2>
  //             <p>{description}</p>
  //             <div className="recipe-icons"></div>
  //             <p className="recipe-tags">
  //               Tags :
  //               {tags.map((tag, index) => {
  //                 const slug = slugify(tag, { lower: true });
  //                 return (
  //                   <Link to={`/tags/${slug}`} key={index}>
  //                     {tag}
  //                   </Link>
  //                 );
  //               })}
  //             </p>
  //           </article>
  //         </section>
  //       </div>
  //     </main>
  //   </Layout>
  // );
};

export const query = graphql`
  query getSingleBlog($title: String) {
    contentfulBlog(title: { eq: $title }) {
      title
      content {
        ingredients
        instructions
        tags
        tools
      }
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

export default BlogTemplate;
