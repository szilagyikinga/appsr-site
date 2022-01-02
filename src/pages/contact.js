import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Layout from "../components/layout";
import {
  message,
  formError,
  serverError,
  formSuccess,
} from "../services/toast";

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [values, setValues] = useState({ ...defaultValues });
  const { placeholderImage1, placeholderImage2 } = useStaticQuery(
    graphql`
      query {
        placeholderImage1: file(relativePath: { eq: "cover-10.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
        placeholderImage2: file(relativePath: { eq: "photo-5.jpg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image1 = getImage(placeholderImage1);
  const image2 = getImage(placeholderImage2);
  const bgImage1 = convertToBgImage(image1);

  const onChange = (key) => (e) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!values.email || !values.message) {
      message("error", formError);
    } else {
      try {
        const response = await fetch("/.netlify/functions/sendmail", {
          method: "POST",
          body: JSON.stringify(values),
        });

        if (response.status === 200) {
          message("success", formSuccess);
          setValues(defaultValues);
        } else {
          message("error", serverError);
        }
      } catch (e) {
        message("error", serverError);
      }
    }
  };
  return (
    <Layout full>
      <section>
        <div className="container d-flex flex-column">
          <div className="row align-items-center justify-content-between gx-0 min-vh-100">
            <div className="col-12 col-md-5 align-self-stretch">
              <BackgroundImage
                Tag="div"
                className="d-none d-md-block vw-50 h-100 float-end bg-cover"
                {...bgImage1}
                preserveStackingContext
              />
              <GatsbyImage
                image={image2}
                className="d-md-none img-cover"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 pb-6 pb-md-8">
              <h2 className="fw-bold text-center mb-2">
                Formulaire de contact
              </h2>

              <hr className="hr-sm my-4 my-md-6 mx-auto bg-gray-300" />

              <form onSubmit={onSubmit}>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="name">
                    Nom et prénom
                  </label>
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder=""
                    value={values["name"]}
                    onChange={onChange("name")}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="form-label" htmlFor="email">
                    Email*
                  </label>

                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder=""
                    value={values["email"]}
                    onChange={onChange("email")}
                  />
                </div>
                <div className="form-group mb-5">
                  <label htmlFor="message">Quelle est votre question ?*</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder=""
                    value={values["message"]}
                    onChange={onChange("message")}
                  ></textarea>
                </div>
                <div className="form-group mb-0">
                  <button className="btn w-100 btn-primary lift" type="submit">
                    Envoyer mon message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </Layout>
  );
};

export default Contact;
