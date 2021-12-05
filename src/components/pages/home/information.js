import * as React from "react";

const InformationSection = () => {
  return (
    <section className="py-8 py-md-11">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 order-md-2">
            <span className="badge bg-success-soft rounded-pill mb-3">
              <span className="h6 text-uppercase">Benefits</span>
            </span>

            <h2>
              We'll take of you with <br />
              <span className="text-success">a great benefits package</span>.
            </h2>

            <p className="fs-lg text-muted mb-6 mb-md-0">
              We put our money where our mouthes are. Once you're part of our
              team, we're going to take the best possible care of you with tons
              of benefits and perks unavailable anywhere else.
            </p>
          </div>
          <div className="col-12 col-md-6 order-md-1">
            <div className="card card-border border-success shadow-lg">
              <div className="card-body">
                <div className="list-group list-group-flush">
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">Comprehensive benefits</p>

                      <p className="fs-sm text-muted mb-0">
                        Health, dental, vision, 401k, and more.
                      </p>
                    </div>

                    <div className="badge badge-rounded-circle bg-success-soft ms-4">
                      <i className="fe fe-check"></i>
                    </div>
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">Unlimited time off</p>

                      <p className="fs-sm text-muted mb-0">
                        Vacation on your own terms.
                      </p>
                    </div>

                    <div className="badge badge-rounded-circle bg-success-soft ms-4">
                      <i className="fe fe-check"></i>
                    </div>
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">Cutting edge hardware</p>

                      <p className="fs-sm text-muted mb-0">
                        We provide brand new computers and phones.
                      </p>
                    </div>

                    <div className="badge badge-rounded-circle bg-success-soft ms-4">
                      <i className="fe fe-check"></i>
                    </div>
                  </div>
                  <div className="list-group-item d-flex align-items-center">
                    <div className="me-auto">
                      <p className="fw-bold mb-1">Moving assistance</p>

                      <p className="fs-sm text-muted mb-0">
                        We will help you get here to work with us!
                      </p>
                    </div>

                    <div className="badge badge-rounded-circle bg-success-soft ms-4">
                      <i className="fe fe-check"></i>
                    </div>
                  </div>
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
