import React from "react";

const Trial = () => {
  return (
    <div className="px-4 py-5 my-5 text-center bg-light">
      <h1 className="h-3 fw-bold">Start your free trial</h1>
      <div className="col-lg-6 mx-auto">
        <p className="text-muted">
        Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-dark btn-learn btn-lg px-4 gap-3">
            Learn more
          </button>
          <button
            type="button"
            className="btn btn-red btn-lg px-4"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
